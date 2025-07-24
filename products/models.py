from django.db import models

class Category(models.Model):
    """
    Represents a category for organizing products.
    """
    name = models.CharField(max_length=255, unique=True, help_text="Name of the category")
    description = models.TextField(blank=True, null=True, help_text="Optional description for the category")

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name

class Product(models.Model):
    """
    Represents a product in the inventory.
    """
    name = models.CharField(max_length=255, help_text="Name of the product")
    description = models.TextField(blank=True, null=True, help_text="Detailed description of the product")
    sku = models.CharField(max_length=100, unique=True, help_text="Stock Keeping Unit")
    price = models.DecimalField(max_digits=10, decimal_places=2, help_text="Selling price of the product")
    category = models.ForeignKey(
        Category,
        related_name='products',
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        help_text="Category this product belongs to"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.name} ({self.sku})'