from rest_framework import serializers
from .models import Location, InventoryItem

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = '__all__'

class InventoryItemSerializer(serializers.ModelSerializer):
    # To display product and location names
    product_name = serializers.CharField(source='product.name', read_only=True)
    location_name = serializers.CharField(source='location.name', read_only=True)

    class Meta:
        model = InventoryItem
        fields = ('id', 'product', 'product_name', 'location', 'location_name', 'quantity', 'last_updated')
        read_only_fields = ('last_updated', 'product_name', 'location_name')
