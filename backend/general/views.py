from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PersonalinfoSerializer
from .serializers import PostSerializer
from .models import Personal_info
from .models import Post

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    http_method_names = ['get']

class PersonalinfoViewSet(viewsets.ModelViewSet):
    queryset = Personal_info.objects.all()
    serializer_class = PersonalinfoSerializer
    http_method_names = ['get']


