from rest_framework import generics, permissions


# from .serializers import PollSerializer
from .models import Poll


class PollList(generics.ListCreateAPIView):
    model = Poll
    # serializer_class = UserSerializer
    permission_classes = [
        permissions.AllowAny
    ]
