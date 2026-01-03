from django.urls import path
from .views import PersonalinfoViewSet, OrganizationsViewSet, PeopleViewSet
from .views import PostViewSet, CommentViewSet
from rest_framework.routers import DefaultRouter




router = DefaultRouter()
router.register(r'post', PostViewSet, 'post')
router.register(r'personalinfo', PersonalinfoViewSet, 'personalinfo')
router.register(r'comment', CommentViewSet, 'comment')
router.register(r'organizations', OrganizationsViewSet, 'organizations')
router.register(r'people', PeopleViewSet, 'people')


urlpatterns = router.urls

