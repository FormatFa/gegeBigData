# Generated by Django 3.0.3 on 2020-02-17 07:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('etl', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='desc',
            field=models.CharField(default='no description', max_length=255),
        ),
    ]