import Avt from './Avt';
import CardBody from './CardBody';
import Wapper from './Wapper';
import CardImg from './CardImg';
import CardTitle from './CardTitle'
import CardDesc from './CardDesc'
import Profile from './Profile'
import Name from './Name'
import TimePost from './TimePost'
import ProfileInfor from './ProfileInfor'

const Card = (props) => {
    const {img, title, desc, avt, name, timePost} = props;
    return (
        <Wapper>
            <CardImg img={img} />
            <CardBody>
                <h3 style={{color: "blue", margin: "unset"}}>Article</h3>
                <CardTitle title={title} />
                <CardDesc desc={desc} />
                <Profile>
                    <Avt avt={avt} />
                    <ProfileInfor>
                        <Name name={name} />
                        <TimePost timePost={timePost} />
                    </ProfileInfor>
                </Profile>
            </CardBody>
        </Wapper>
    )
}

export default Card;