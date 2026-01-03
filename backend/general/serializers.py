from rest_framework import serializers
from .models import Personal_info
from .models import Post
from .models import Comment
from .models import Photo, Video
from .models import Organizations, People
from .models import OrganizationPhoto

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['title','image', 'text']


class PersonalinfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Personal_info
        fields = ['image', 'text']

class CommentSerializer(serializers.ModelSerializer):
    photos = serializers.SerializerMethodField()
    videos = serializers.SerializerMethodField()

    # Поля для загрузки новых файлов (write_only)
    images = serializers.ListField(
        child=serializers.ImageField(), write_only=True, required=False
    )
    videos_files = serializers.ListField(
        child=serializers.FileField(), write_only=True, required=False
    )

    class Meta:
        model = Comment
        fields = '__all__'

    def get_photos(self, obj):
        request = self.context.get('request')
        return [
            {'file': request.build_absolute_uri(photo.image.url)}
            for photo in obj.photos.all()
        ]

    def get_videos(self, obj):
        request = self.context.get('request')
        return [
            {'file': request.build_absolute_uri(video.video.url)}
            for video in obj.videos.all()
        ]

    def create(self, validated_data):
        images = validated_data.pop('images', [])
        videos_files = validated_data.pop('videos_files', [])
        comment = Comment.objects.create(**validated_data)

        # Создаем фото
        for image in images:
            Photo.objects.create(comment=comment, image=image)

        # Создаем видео
        for video in videos_files:
            Video.objects.create(comment=comment, video=video)

        return comment


class OrganizationPhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrganizationPhoto
        fields = ['image']


class OrganizationsSerializer(serializers.ModelSerializer):
    photos = OrganizationPhotoSerializer(many=True, read_only=True)

    class Meta:
        model = Organizations
        fields = ['text', 'photos']
class PeopleSerializer(serializers.ModelSerializer):
    class Meta:
        model = People
        fields = ['text', 'image']

