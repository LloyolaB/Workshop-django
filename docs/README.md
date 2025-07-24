# Documentación del Proyecto de Inventario

Esta es una aplicación de inventario desarrollada con Django y Django REST Framework.

## Configuración del Entorno

1.  **Clonar el repositorio:**

    ```bash
    git clone <URL del repositorio>
    cd <nombre del repositorio>
    ```

2.  **Crear y activar un entorno virtual:**

    ```bash
    python -m venv env
    # En Windows
    env\Scripts\activate
    # En macOS/Linux
    source env/bin/activate
    ```

3.  **Instalar las dependencias:**

    ```bash
    pip install -r requirements.txt
    ```

## Base de Datos

1.  **Crear las migraciones:**

    ```bash
    python manage.py makemigrations
    ```

2.  **Aplicar las migraciones:**

    ```bash
    python manage.py migrate
    ```

## Ejecutar el Servidor

Una vez configurada la base de datos, puedes ejecutar el servidor de desarrollo:

```bash
python manage.py runserver
```

La API estará disponible en `http://127.0.0.1:8000/`.

## Endpoints de la API

La API proporciona los siguientes endpoints:

*   **Autenticación:** `/api/auth/` (gestionado por `djoser`)
    *   `/api/auth/users/` (Registro de usuarios)
    *   `/api/auth/token/login/` (Inicio de sesión)
    *   `/api/auth/token/logout/` (Cierre de sesión)
*   **Productos:** `/api/products/`
    *   `/api/products/categories/`
    *   `/api/products/products/`
*   **Inventario:** `/api/inventory/`
    *   `/api/inventory/locations/`
    *   `/api/inventory/inventory-items/`
