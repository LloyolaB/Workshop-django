from rest_framework import serializers
from .models import Category, Product

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    # To display category name instead of id
    category_name = serializers.CharField(source='category.name', read_only=True)

    class Meta:
        model = Product
        fields = ('id', 'name', 'description', 'sku', 'price', 'category', 'category_name', 'created_at', 'updated_at')
        # Make category optional for writing, but include it for reading
        read_only_fields = ('created_at', 'updated_at', 'category_name')
