# Generated by Django 3.2.13 on 2022-07-03 04:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_auto_20220627_0439'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='coutnInStock',
            new_name='countInStock',
        ),
    ]
