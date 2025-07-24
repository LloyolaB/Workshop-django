from django.db import models
from django.core.exceptions import ValidationError

class Location(models.Model):
    """
    Represents a physical location where inventory is stored.
    """
    name = models.CharField(max_length=255, unique=True, help_text="Name of the location (e.g., Main Warehouse)")
    address = models.TextField(blank=True, null=True, help_text="Address of the location")

    def __str__(self):
        return self.name

class InventoryItem(models.Model):
    """
    Represents the stock of a specific product at a specific location.
    """
    product = models.ForeignKey(
        'products.Product',
        on_delete=models.CASCADE,
        related_name='inventory_items',
        help_text="The product being tracked"
    )
    location = models.ForeignKey(
        Location,
        on_delete=models.CASCADE,
        related_name='inventory_items',
        help_text="The location of this stock"
    )
    quantity = models.PositiveIntegerField(default=0, help_text="Quantity of the product available at this location")
    last_updated = models.DateTimeField(auto_now=True)

    class Meta:
        # Ensures that a product can only have one inventory entry per location
        unique_together = ('product', 'location')
        verbose_name = "Inventory Item"
        verbose_name_plural = "Inventory Items"

    def __str__(self):
        return f'{self.quantity} x {self.product.name} at {self.location.name}'

    def clean(self):
        # Example of a custom validation rule
        if self.quantity < 0:
            raise ValidationError("Quantity cannot be negative.")