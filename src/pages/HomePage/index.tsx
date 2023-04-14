import { Page01 } from "../../components/HomeComponents/Page1"
import {Card} from "../../components/HomeComponents/Card"
import Image from "../../assets/imgs/Coffee (1).svg"
import {HomeContainer,Home2Section} from "./styled"



export const HomePage=()=>{
    return(
        <HomeContainer>
            <Page01/>
            <Home2Section>
                <Card image={Image} txt1="café" txt2="creme" txt3="tradicional" value={0} setValue={0}/>
                <Card image={Image} txt1="café" txt2="creme" txt3="tradicional" value={0} setValue={0}/>
                <Card image={Image} txt1="café" txt2="creme" txt3="tradicional" value={0} setValue={0}/>
                <Card image={Image} txt1="café" txt2="creme" txt3="tradicional" value={0} setValue={0}/>
                <Card image={Image} txt1="café" txt2="creme" txt3="tradicional" value={0} setValue={0}/>
                <Card image={Image} txt1="café" txt2="creme" txt3="tradicional" value={0} setValue={0}/>
                <Card image={Image} txt1="café" txt2="creme" txt3="tradicional" value={0} setValue={0}/>
                <Card image={Image} txt1="café" txt2="creme" txt3="tradicional" value={0} setValue={0}/>
                <Card image={Image} txt1="café" txt2="creme" txt3="tradicional" value={0} setValue={0}/>
                <Card image={Image} txt1="café" txt2="creme" txt3="tradicional" value={0} setValue={0}/>
                <Card image={Image} txt1="café" txt2="creme" txt3="tradicional" value={0} setValue={0}/>
                <Card image={Image} txt1="café" txt2="creme" txt3="tradicional" value={0} setValue={0}/>
                <Card image={Image} txt1="café" txt2="creme" txt3="tradicional" value={0} setValue={0}/>
                <Card image={Image} txt1="café" txt2="creme" txt3="tradicional" value={0} setValue={0}/>
            </Home2Section>
        </HomeContainer>
    )
}