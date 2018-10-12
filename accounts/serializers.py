from rest_framework.serializers import ModelSerializer
from accounts.models import User, PatientDetails


class UserSerializer(ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'


class PatientDetailsSerializer(ModelSerializer):

    class Meta:
        model = PatientDetails
        fields = '__all__'
