from django.urls import path
from .views import PostViewSet
from rest_framework.routers import DefaultRouter




router = DefaultRouter()
router.register(r'post', PostViewSet, 'post')

urlpatterns = router.urls
