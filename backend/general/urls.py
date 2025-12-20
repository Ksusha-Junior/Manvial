from django.urls import path
from .views import PersonalinfoViewSet
from .views import PostViewSet
from rest_framework.routers import DefaultRouter




router = DefaultRouter()
router.register(r'post', PostViewSet, 'post')
router.register(r'personalinfo', PersonalinfoViewSet, 'personalinfo')

urlpatterns = router.urls
