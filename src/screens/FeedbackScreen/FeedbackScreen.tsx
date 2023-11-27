// FeedbackScreen.tsx
import React from 'react';
import {View, ToastAndroid, Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TextInputField} from '../../components/TextInput';
import {StarComponent} from '../../components/StarComponent';
import {useNavigation} from '@react-navigation/native';
import {useToast} from 'react-native-toast-notifications';
import {Formik} from 'formik';
import * as yup from 'yup';
import {CustomButton} from '../../components/Button';

type Props = {};

const isIos = Platform.OS === 'ios';

export const FeedbackScreen: React.FC<Props> = () => {
  const navigation = useNavigation();
  const toast = useToast();

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Name is required')
      .min(3, 'Name should at least contain more than 3 characters'),
    email: yup.string().email('Invalid email').required('Email is required'),
    feedback: yup
      .string()
      .required('Feedback is required')
      .min(3, 'Feedback should at least contain more than 3 characters'),
    rating: yup
      .number()
      .required('Rating is required')
      .min(1, 'You must rate from 1 to 5'),
  });

  const showToast = () => {
    const msg = 'The feedback has been sent';
    isIos
      ? toast.show(msg, {
          type: 'success',
          placement: 'bottom',
          duration: 2000,
          animationType: 'zoom-in',
        })
      : ToastAndroid.show(msg, ToastAndroid.SHORT);
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        feedback: '',
        rating: 0,
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, {resetForm}) => {
        await AsyncStorage.setItem('feedbackData', JSON.stringify(values));
        resetForm();
        showToast();
        setTimeout(() => {
          navigation.goBack();
        }, 500);
      }}>
      {formik => (
        <View style={{padding: 20}}>
          <TextInputField
            label="Name"
            value={formik.values.name}
            onChangeText={formik.handleChange('name')}
            onBlur={formik.handleBlur('name')}
            placeholder="Enter your name"
            error={formik.touched.name && formik.errors.name}
          />
          <TextInputField
            label="Email"
            value={formik.values.email}
            onChangeText={formik.handleChange('email')}
            onBlur={formik.handleBlur('email')}
            placeholder="Enter your email"
            error={formik.touched.email && formik.errors.email}
          />

          <TextInputField
            label="Feedback"
            value={formik.values.feedback}
            onChangeText={formik.handleChange('feedback')}
            onBlur={formik.handleBlur('feedback')}
            placeholder="Enter your feedback"
            error={formik.touched.feedback && formik.errors.feedback}
          />

          <StarComponent
            value={formik.values.rating}
            onChange={value => formik.setFieldValue('rating', value)}
            error={formik.touched.rating && formik.errors.rating}
          />

          <View style={{alignItems: 'center', marginTop: 20}}>
            <CustomButton
              title="Submit Feedback"
              onPress={formik.handleSubmit}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};
