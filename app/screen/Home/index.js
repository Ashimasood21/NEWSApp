import React ,{useEffect}from 'react';
// import SearchBar from './app/components/SearchBar';
import SearchBar from '../../components/SearchBar';
import Screen from '../../components/Screen';
import BlockCard from '../../components/BlockCard';
import FeaturedNews from '../../components/FeaturedNews';
import SmallCard from '../../components/SmallCard';
import BreakingNews from '../../components/BreakingNews';
import data from '../../../fakeData';
import TechNews from '../../components/TechNews';
import FlatCard from '../../components/FlatCard';
import PoliticalNews from '../../components/PoliticalNews';
import EntertainmentNews from '../../components/EntertainmentNews';
import * as Utility from "../../Utility"
 const  Home=()=> {
  const breakingNews = data.filter(item => item.category === 'breaking-news')
  const techNews = data.filter(item => item.category === 'tech')
  const politicalNews = data.filter(item => item.category === 'political')
  const entertainmentNews = data.filter(item => item.category === 'entertainment')
  useEffect(async() => {
   let token =await Utility.getFromLocalStorge('token')
console.log(token)
})
  return (
    <Screen>
      
      <SearchBar/>
      <FeaturedNews item={{
      id: '8',
      title: 'This is the title no eight.',
      desc:
        'Desc is the short form of description and this format is the actual same as our real database.',
      thumbnail: 'http://lorempixel.com/400/200/',
      category: 'tech',
    }} />
      <BreakingNews data={breakingNews}/>
      {/* <FlatCard item={{
      id: '8',
      title: 'This is the title no eight.',
      desc:
        'Desc is the short form of description and this format is the actual same as our real database.',
      thumbnail: 'http://lorempixel.com/400/200/',
      category: 'tech',
    }} /> */}
    <PoliticalNews data={politicalNews}/>
    <TechNews data={techNews}/>
    <EntertainmentNews data={entertainmentNews}/>
    </Screen>
  
  )
}
export default Home;
