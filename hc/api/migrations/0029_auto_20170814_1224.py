# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2017-08-14 12:24
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0008_auto_20170814_1208'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0028_auto_20170713_1115'),
    ]

    operations = [
        migrations.CreateModel(
            name='CheckMatrix',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.AddField(
            model_name='check',
            name='department_assigned',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='accounts.Department'),
        ),
        migrations.AddField(
            model_name='checkmatrix',
            name='check_ref',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Check'),
        ),
        migrations.AddField(
            model_name='checkmatrix',
            name='user_ref',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]