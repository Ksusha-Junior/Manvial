from django.db import models

class Post(models.Model):
    title = models.CharField(verbose_name='заголовок', blank=True )
    image = models.ImageField(verbose_name='Картинка', upload_to='images', null=True, blank=True)
    text = models.TextField(verbose_name='Текст')

    def __str__(self):
        return self.text

    class Meta:
        verbose_name = 'Сообщение'
        verbose_name_plural = 'Сообщения'

