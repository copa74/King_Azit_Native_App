import {Text, View, TextInput, SafeAreaView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useCallback, useState} from 'react';
import {RootStackParamList} from 'AppInner';
import {SignUpstyles} from './SignUpstyles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useAppDispatch} from '@/store';
import {SignUpHeader} from './SignUpComponent';
import {BottomButton} from '@/components/Button';
import {idCheck} from '@/api/SignUp/SignUpApi';
import userSlice from '@/slices/user';

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpId'>;

export function SignUpId({navigation}: SignInScreenProps) {
  const dispatch = useAppDispatch();
  const [id, setId] = useState('');
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);
  const onChangeId = useCallback((text: any) => {
    setId(text.trim());
  }, []);

  const onClickNextButton = async () => {
    const regExp = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
    const regExp2 = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
    if (!id) return;
    if (id.length < 4 || regExp.test(id) || regExp2.test(id)) {
      setError(true);
      return;
    }

    const idCheck2: any = await idCheck({memberId: id});
    if (idCheck2 === 200) {
      dispatch(userSlice.actions.setEmail({email: id}));
      navigation.navigate('SignUpPassWord');
      setError(false);
    } else {
      setError2(true);
    }
  };

  return (
    <SafeAreaView style={SignUpstyles.container}>
      <KeyboardAwareScrollView
        enableOnAndroid
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}>
        <View>
          <SignUpHeader text={'로그인에 사용할 \n아이디를 입력해주세요.'} bar={144} />
        </View>

        <View style={SignUpstyles.inputWrapper}>
          <View style={SignUpstyles.textInputWrapper}>
            <TextInput
              style={SignUpstyles.textInput}
              placeholder="아이디 입력"
              onChangeText={onChangeId}
              importantForAutofill="yes" // 자동완성 불러오기
              placeholderTextColor="#6F6F6F"
              value={id}
            />
          </View>
          <View>
            {error && (
              <View>
                <Text style={SignUpstyles.errorText}>올바른 아이디 형태가 아닙니다. 4자리 이상 영문으로</Text>
                <Text style={SignUpstyles.errorText}>다시 시도해주세요.</Text>
              </View>
            )}

            {error2 && (
              <View>
                <Text style={SignUpstyles.errorText}>중복된 아이디 입니다.</Text>
              </View>
            )}
          </View>
        </View>

        <View style={SignUpstyles.center}>
          <BottomButton
            onPress={onClickNextButton}
            title="다음"
            backgroundColor={id ? '#F5FF82' : '#808080'}
            color="#000"
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

export default SignUpId;
