from rest_framework import serializers
from .models import Personal_info
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['title','image', 'text']


class PersonalinfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Personal_info
        fields = ['image', 'text']