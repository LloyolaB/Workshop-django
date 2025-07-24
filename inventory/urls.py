from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import LocationViewSet, InventoryItemViewSet

router = DefaultRouter()
router.register(r'locations', LocationViewSet)
router.register(r'inventory-items', InventoryItemViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
