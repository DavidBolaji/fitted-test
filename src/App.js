import { Layout, Menu } from 'antd';
import './App.css';
import Nav from './components/Nav/Nav';
import pexels from './assets/img/pexels.png';
import { FiUser } from "react-icons/fi";
import Sidebar from './components/Sidebar/Sidebar';
import { FormInlineContTS, FormInputContGTS, FormInputContTS, FormInputTS, FormLabelTS, FormOptionTS, FormSelectTS } from './components/style/form.styled';
import { ColTS, RowTS } from './components/style/laayout.styled';
import { BsBank } from "react-icons/bs";
import ButtonTS from './components/style/button.styled';
import { useEffect, useState } from 'react';
const { Content } = Layout;

const fetchBanks = async () => {
  const send = await fetch(' https://fitted-staging-api.herokuapp.com/api/v1/bank/banks', {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  });

  const res = await send.json();

  return res.data;
}

const validateData = async (body) => {
  const data = await fetch('https://fitted-staging-api.herokuapp.com/api/v1/bank/resolveAccount', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  const res = await data.json();

  if (res.status === false) {
    console.log(res.message);
  } else {
    return res;
  }
}



function App() {

  const [banks, setBanks] = useState([]);
  const [width, setWidth] = useState(window.screen.width)
  const [gender, setGender] = useState('');
  const [style, setStyle] = useState('');
  const [bankCode, setnBank] = useState('');
  const [acc, setAcc] = useState('');
  const [accountNo, setAccNum] = useState('');

  useEffect(() => {
    fetchBanks().then(res => {
      setBanks(res)
    })

  }, [])

  useEffect(() => {
    const resize = (e) => setWidth(window.screen.width)

    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  let isValid = gender.length != 0 &&
    style.length != 0 &&
    bankCode.length != 0 &&
    acc.length != 0 &&
    accountNo.length != '';


  const handleGender = (e) => {
    let gender = e.target.value.trim()
    setGender(gender)
  }

  const handleSew = (e) => {
    let style = e.target.value
    setStyle(style)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    validateData({ bankCode, accountNo }).then(res => {

      console.log(res);
    })
  }

  const handleBank = (e) => {
    let bank = e.target.value
    setnBank(bank)
  }


  const handleName = (e) => {
    let bankCode = e.target.value
    setAcc(bankCode)
  }

  const handleNum = (e) => {
    let actNum = e.target.value
    setAccNum(actNum)
  }



  return <Layout>
    <Sidebar />
    <Layout className="site-layout">
      <Nav />
      <Content
        className="site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
        <RowTS style={{
          justifyContent: 'center',
          fontSize: '20px',
          fontWeight: '700',
          textAlign: 'center',
        }}>
          vetted Tailor Application
        </RowTS>

        <RowTS style={{
          justifyContent: 'center',
          fontSize: '16px',
          maxWidth: '500px',
          textAlign: 'center',
          margin: 'auto',
          marginTop: '20px',
          marginBottom: '20px'
        }}>
          One step closer to the goal! please provide us with your Bank details with which you will be recieving payment.
        </RowTS>

        <RowTS>
          <ColTS>
            <RowTS style={{
              marginBottom: '20px',
              margin: 'auto',
              width: width < 1024 && '350px',

              justifyContent: 'center',
              transform: width < 1024 ? 'translate(30px,-20px)' : 'translate(-150px,-40px)'
            }}>
              <img width={'150px'} src={pexels} alt='pexel' />
            </RowTS>
            <RowTS style={{
              flexDirection: 'column',
              width: '80%',
              margin: 'auto'
            }}>
              <RowTS style={{
                marginBottom: '20px',
                flexDirection: width < 1024 ? 'row' : null,
              }}>
                <ColTS style={{
                  flex: '0.25'
                }}>Name</ColTS>
                <ColTS style={{
                  flex: '0.75'
                }}>Samuel philip</ColTS>
              </RowTS>

              <RowTS style={{
                marginBottom: '20px',
                flexDirection: width < 1024 ? 'row' : null,
              }}>
                <ColTS style={{
                  flex: '0.25'
                }}>Gender</ColTS>
                <ColTS style={{
                  flex: '0.75'
                }}>male</ColTS>
              </RowTS>

              <RowTS style={{
                marginBottom: '20px',
                flexDirection: width < 1024 ? 'row' : null,
              }}>
                <ColTS style={{
                  flex: '0.25'
                }}>Location</ColTS>
                <ColTS style={{
                  flex: '0.75'
                }}>Lagos</ColTS>
              </RowTS>

              <RowTS style={{
                marginBottom: '20px',
                flexDirection: width < 1024 ? 'row' : null,
              }}>
                <ColTS style={{
                  flex: '0.25'
                }}>store name</ColTS>
                <ColTS style={{
                  flex: '0.75'
                }}>Skibi Fashion House</ColTS>
              </RowTS>
              <RowTS style={{
                marginBottom: '20px',
                flexDirection: width < 1024 ? 'row' : null,
              }}>
                <ColTS style={{
                  flex: '0.25'
                }}>Location</ColTS>
                <ColTS style={{
                  flex: '0.75'
                }}>Lagos</ColTS>
              </RowTS>

              <RowTS style={{
                marginBottom: '20px',
                flexDirection: width < 1024 ? 'row' : null,
              }}>
                <ColTS style={{
                  flex: '0.25'
                }}>Email address</ColTS>
                <ColTS style={{
                  flex: '0.75'
                }}>Emmanuel255@gmail.com</ColTS>
              </RowTS>

            </RowTS>
          </ColTS>


          <ColTS>
            <FormInlineContTS line={'vertical'}>
              <FormInputContGTS line={'vertical'}>
                <FormLabelTS>Gender</FormLabelTS>
                <FormSelectTS onChange={handleGender}>
                  <FormOptionTS value={''}>Please Select</FormOptionTS>
                  <FormOptionTS value={''}>Male</FormOptionTS>
                  <FormOptionTS value={''}>Female</FormOptionTS>
                </FormSelectTS>

              </FormInputContGTS>

              <FormInputContGTS line={'vertical'}>
                <FormLabelTS>style you sew</FormLabelTS>
                <FormSelectTS onChange={handleSew}>
                  <FormOptionTS value={''}>please Select</FormOptionTS>
                  <FormOptionTS value={''}>Native</FormOptionTS>
                  <FormOptionTS value={''}>Traditional</FormOptionTS>
                </FormSelectTS>

              </FormInputContGTS>

            </FormInlineContTS>

            <FormLabelTS>Bank Name</FormLabelTS>
            <FormSelectTS onChange={handleBank}>
              <FormOptionTS value={''}>Please Selct</FormOptionTS>
              {banks.map(bank => {
                return <FormOptionTS key={bank.code} value={bank.code}>{bank.name}</FormOptionTS>
              })}
            </FormSelectTS>

            <FormLabelTS>Account Number</FormLabelTS>
            <FormInputContTS>
              <FormInputTS onChange={handleNum} placeholder={'Please Enter Account Number'} type={'text'} icon={<BsBank style={{ marginLeft: "10px" }} />} />
            </FormInputContTS>

            <FormLabelTS>Account Name</FormLabelTS>
            <FormInputContTS onChange={handleName}>
              <FormInputTS placeholder={'Please Enter Account Number'} type={'text'} icon={<FiUser style={{ marginLeft: "10px" }} />} />
            </FormInputContTS>

            <ButtonTS bg={'#B7076B'} onClick={handleSubmit} disabled={!isValid}>Submit Application</ButtonTS>
          </ColTS>
        </RowTS>

      </Content>
    </Layout>
  </Layout>
}

export default App;
