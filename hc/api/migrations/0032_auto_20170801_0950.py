# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2017-08-01 09:50
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0031_remove_check_down_alert'),
    ]

    operations = [
        migrations.AlterField(
            model_name='check',
            name='nag_time',
            field=models.DurationField(default=datetime.timedelta(0, 3600)),
        ),
    ]
