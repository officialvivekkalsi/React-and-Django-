# Generated by Django 3.2.13 on 2022-07-25 05:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_rename_coutninstock_product_countinstock'),
    ]

    operations = [
        migrations.RenameField(
            model_name='orderitem',
            old_name='quantity',
            new_name='qty',
        ),
    ]
