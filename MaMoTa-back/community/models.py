from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.conf import settings
from movies.models import Movie


class Article(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='articles',
    )
    movie = models.ForeignKey(
        Movie, on_delete=models.CASCADE, related_name='articles'
    )
    rate = models.FloatField(
        validators=[MinValueValidator(0), MaxValueValidator(10)]
    )
    title = models.CharField(max_length=100)
    content = models.TextField(null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    like_users = models.ManyToManyField(
        settings.AUTH_USER_MODEL, related_name='like_articles'
    )



class Comment(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='comments',
    )
    article = models.ForeignKey(
        Article, on_delete=models.CASCADE, related_name='comments'
    )
    content = models.CharField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
