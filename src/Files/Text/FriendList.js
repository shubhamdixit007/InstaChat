import React,{Component} from 'react'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'

class FriendList extends Component{
    render(){
        // const Friends=[1,2,3,4,5,6,7,8,9,10]
        const ActiveTime =[21,23,46,1,34,6,34,9,56,3]        
        return(
            <ListGroup>
                <ListGroup.Item active>Active Friends</ListGroup.Item>
                {ActiveTime.map((time,key)=>
                    <ListGroup.Item key={key}>
                       <Col style={styles.listLeft} >
                            <Image src={'https://via.placeholder.com/40'} roundedCircle className="mr-3" />
                            Friend {key+1}
                        </Col>
                        <Col style={styles.listRight}>
                            {time} min ago  
                        </Col>
                </ListGroup.Item>)}
            </ListGroup>
        )
    }
}

const styles = {
    listLeft:{
        width: '50%',
        display: 'inline-block',
        padding:0,
        margin: 0                
    },
    listRight:{
        width: '50%',
        display: 'inline-block',
        padding:0,
        margin: 0,
        fontSize:"x-small",
        textAlign:"Right"
    }
}

export default FriendList