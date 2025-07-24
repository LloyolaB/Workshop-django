from django.contrib import admin
from .models import Location, InventoryItem

@admin.register(Location)
class LocationAdmin(admin.ModelAdmin):
    list_display = ('name', 'address')
    search_fields = ('name',)

@admin.register(InventoryItem)
class InventoryItemAdmin(admin.ModelAdmin):
    list_display = ('product', 'location', 'quantity', 'last_updated')
    list_filter = ('location', 'last_updated')
    search_fields = ('product__name', 'location__name')
    autocomplete_fields = ('product', 'location')