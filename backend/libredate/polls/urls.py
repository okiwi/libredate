from django.conf.urls import patterns, url
from .api import PollList

urlpatterns = patterns(
    '',
    # url(r'^/(?P<slug>[0-9a-zA-Z_-]+)$', PollDetail.as_view(),
    #  name='poll-detail'),
    url(r'^$', PollList.as_view(), name='poll-list')
)
