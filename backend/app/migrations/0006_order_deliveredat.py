# Generated by Django 3.2.13 on 2022-07-27 02:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_rename_quantity_orderitem_qty'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='deliveredAt',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
