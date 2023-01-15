import React from "react";
import {ActivityIndicator,Dimensions,View,Text,ScrollView,SafeAreaView, Image,TouchableOpacity,StyleSheet} from 'react-native';
import Header from "../components/universal/header";
import s from '../../styles/mainStyle';
import Tabs from "../components/universal/tab";
import { useEffect, useState } from "react/cjs/react.development";
import Preview from "../components/universal/horizontalPreview";
import NewThingy from "../components/universal/productmini copy";
import Banner from "../components/universal/banner";
import apiData from "../../api/getApi";
import ProductMini from "../components/universal/productmini";
import coffee from '../components/universal/coffee.jpg'
import drinks from '../components/universal/drinks.jpg'
import fleece from '../components/universal/fleece.jpg'
import hats from '../components/universal/hats.jpg'
import hoodie1 from '../components/universal/hoodie1.jpg'
import hoodie2 from '../components/universal/hoodie2.jpg'
import kit1 from '../components/universal/kit.jpg'
import kit2 from '../components/universal/kit2.jpg'
import kit3 from '../components/universal/kit3.jpg'
import longsleeve1 from '../components/universal/longsleeve.jpg'
import longsleeve2 from '../components/universal/longsleeve2.jpg'
import redcollar from '../components/universal/redcollar.jpg'
import redshirt from '../components/universal/redshirt.jpg'
import snacks from '../components/universal/snacks.jpg'
import snacks1 from '../components/universal/snacks1.jpg'
import bannerimg from '../components/universal/banner.png'
import * as WebBrowser from 'expo-web-browser';

const {width,height}=Dimensions.get('window');
export default function Shop(props){
    const [featured,setFeatured]=useState([]);
    const [activeCat,setactiveCat]=useState(10);
    const [isLoading,setisLoading]=useState(true);

    const categorySearch=(data)=>{
        console.log(data);
    }
    const _handlePressButtonAsync = async () => {
        let result = await WebBrowser.openBrowserAsync('https://425kshah.wixsite.com/brave-bazaar');
        setResult(result);
      };

    const getFeaturedProducts=(url)=>{
        apiData(url,'GET')
        .then(json=>{
            setFeatured(json)
            setisLoading(false)
        }).catch(e=>{
            setisLoading(false)
        })
    }

    const styles = StyleSheet.create({
        root: {
          alignItems: 'center',
          padding: 10,
          backgroundColor:'#0c1559',
          height:40,
          borderRadius:7,
          marginTop:30,
          width:350
        },
        main: {
            alignItems: 'center',
            padding: 10,
            backgroundColor:'#0c1559'
          }
    })

    useEffect(()=>{
        getFeaturedProducts(`https://fakestoreapi.com/products?limit=5`);
    },[]);
    return(
            <ScrollView>
                <Header/>
                
              <Image source={bannerimg} style={{width:350,height:100,marginLeft:10}}/>
		{/* <View style={s.fl1}>
                    <Text style={[s.f18,s.b,s.pdlt10]}>Shop For</Text>
                    <Tabs
                        data={[
                            {id:0,name:"Hoodies"},
                            {id:0,name:"Fleeces and Sweatshirts"},
                            {id:0,name:"Accessories"},
                            {id:0,name:"Food"},
                            {id:0,name:"Drinks "}
                        ]}
                        bgcolor="transparent" 
                        tabVal={activeCat}
                        settabData={categorySearch}
                    />
                </View>
                <Preview title="New Years Deals" 
                    width={width/1.2}
                    productimgheight={150}
                    productimgresizemode="cover"
                    productTitleStyle={[{fontSize:22},s.b]}
                    bigBanner={true} products={[
                    {id:0,title:'Fleece Collection',image:longsleeve1,price:false,discount:'Flat 50% off'},
                    {id:0,title:'Hoodies Collection',image:fleece,price:false,discount:'Flat 60% off'},
                    {id:0,title:'Hats Wear',image:redcollar,price:false,discount:'30% off'}
                ]} /> */}
            <View style={[s.fl1,s.mgtp20]}>
                <View style={[s.row,s.spacedBw,s.pdlt10,s.pdrt10]}>
                    <Text style={[s.f22,s.b]}>Fresh Arrivals</Text>
                    {isLoading && <ActivityIndicator size={'small'} />}
                </View>
                    
                
                <ScrollView style={[s.row,s.wrapper,s.mgtp30,s.pdlt10,{width:500}]}>
                <TouchableOpacity  style={[{width:115,height:300 || 'auto',minHeight:100,height:200 }]}>
                                <View style={{flex:1}}>
                                    <View style={[s.textCenter]}>
                                    <Image source={fleece} style={{width:'300%',height:'150%'}} />
                                                
                                    </View>
                                    
                                </View>
                                <View style={{flex:1,marginTop:10}}>
                                        <Text style={{width:500,marginTop:70,fontSize:19,fontWeight:'bold',color:'white'}}>
                                          Grey Fleece
                                        </Text>
                                        <TouchableOpacity  onPress={_handlePressButtonAsync}style={styles.root} >
                                            <Text style={[s.f14,s.clfff,{color:'white'}]}>Shop Now</Text>
                                        </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity  style={[{width:115,height:300, marginTop:150 || 'auto',minHeight:100,height:200 }]}>
                                <View style={{flex:1}}>
                                    <View style={[s.textCenter]}>
                                    <Image source={hoodie1} style={{width:'300%',height:'150%'}} />
                                                
                                    </View>
                                    
                                </View>
                                <View  style={{flex:1,marginTop:10}}>
                                        <Text style={{width:500,marginTop:70,fontSize:19,fontWeight:'bold',color:'white'}}>
                                           Red Hoodie
                                        </Text>
                                        <TouchableOpacity onPress={_handlePressButtonAsync} style={styles.root} >
                                            <Text style={[s.f14,s.clfff,{color:'white'}]}>Shop Now</Text>
                                        </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={[{width:115,height:300, marginTop:150 || 'auto',minHeight:100,height:200 }]}>
                                <View style={{flex:1}}>
                                    <View style={[s.textCenter]}>
                                    <Image source={hoodie2} style={{width:'300%',height:'150%'}} />
                                                
                                    </View>
                                    
                                </View>
                                <View style={{flex:1,marginTop:10}}>
                                        <Text style={{width:500,marginTop:70,fontSize:19,fontWeight:'bold',color:'white'}}>
                                           Grey Hoodie
                                        </Text>
                                        <TouchableOpacity onPress={_handlePressButtonAsync} style={styles.root} >
                                            <Text style={[s.f14,s.clfff,{color:'white'}]}>Shop Now</Text>
                                        </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={[{width:115,height:300, marginTop:150 || 'auto',minHeight:100,height:200 }]}>
                                <View style={{flex:1}}>
                                    <View style={[s.textCenter]}>
                                    <Image source={longsleeve1} style={{width:'300%',height:'150%'}} />
                                                
                                    </View>
                                    
                                </View>
                                <View style={{flex:1,marginTop:10}}>
                                        <Text style={{width:500,marginTop:70,fontSize:19,fontWeight:'bold',color:'white'}}>
                                           Long Sleeve T-shirt
                                        </Text>
                                        <TouchableOpacity onPress={_handlePressButtonAsync} style={styles.root} >
                                            <Text style={[s.f14,s.clfff,{color:'white'}]}>Shop Now</Text>
                                        </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={[{width:115,height:300, marginTop:150 || 'auto',minHeight:100,height:200 }]}>
                                <View style={{flex:1}}>
                                    <View style={[s.textCenter]}>
                                    <Image source={longsleeve2} style={{width:'300%',height:'150%'}} />
                                                
                                    </View>
                                    
                                </View>
                                <View style={{flex:1,marginTop:10}}>
                                        <Text style={{width:500,marginTop:70,fontSize:19,fontWeight:'bold',color:'white'}}>
                                          Grey Sweatshirt
                                        </Text>
                                        <TouchableOpacity onPress={_handlePressButtonAsync} style={styles.root} >
                                            <Text style={[s.f14,s.clfff,{color:'white'}]}>Shop Now</Text>
                                        </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={[{width:115,height:300, marginTop:150 || 'auto',minHeight:100,height:200 }]}>
                                <View style={{flex:1}}>
                                    <View style={[s.textCenter]}>
                                    <Image source={redcollar} style={{width:'300%',height:'150%'}} />
                                                
                                    </View>
                                    
                                </View>
                                <View style={{flex:1,marginTop:10}}>
                                        <Text style={{width:500,marginTop:70,fontSize:19,fontWeight:'bold',color:'white'}}>
                                          Red Collared T-shirt
                                        </Text>
                                        <TouchableOpacity onPress={_handlePressButtonAsync} style={styles.root} >
                                            <Text style={[s.f14,s.clfff,{color:'white'}]}>Shop Now</Text>
                                        </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={[{width:115,height:300, marginTop:150 || 'auto',minHeight:100,height:200 }]}>
                                <View style={{flex:1}}>
                                    <View style={[s.textCenter]}>
                                    <Image source={redshirt} style={{width:'300%',height:'150%'}} />
                                                
                                    </View>
                                    
                                </View>
                                <View style={{flex:1,marginTop:10}}>
                                        <Text style={{width:500,marginTop:70,fontSize:19,fontWeight:'bold',color:'white'}}>
                                           Red T-shirt
                                        </Text>
                                        <TouchableOpacity onPress={_handlePressButtonAsync} style={styles.root} >
                                            <Text style={[s.f14,s.clfff,{color:'white'}]}>Shop Now</Text>
                                        </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                            
                    
                        
                        
                    
                </ScrollView>
            </View>
            </ScrollView>
    )


    
}
