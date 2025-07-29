#!/usr/bin/env python
import os
import django

# Configurar Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mysite.settings')
django.setup()

from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

# Crear o actualizar usuario
username = 'lloyola'
password = 'test123'

try:
    user = User.objects.get(username=username)
    print(f'Usuario {username} ya existe')
except User.DoesNotExist:
    user = User.objects.create_user(username=username, password=password)
    print(f'Usuario {username} creado')

# Establecer contraseña
user.set_password(password)
user.save()
print(f'Contraseña establecida para {username}')

# Crear o obtener token
token, created = Token.objects.get_or_create(user=user)
print(f'Token: {token.key}')
print(f'Token creado: {created}')

print('\nCredenciales de prueba:')
print(f'Usuario: {username}')
print(f'Contraseña: {password}')
