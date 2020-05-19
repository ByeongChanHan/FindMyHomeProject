import React,{Component} from 'react';
import Header from './HeaderComponent'
import '../stylesheets/viewboard.css'

class Viewboard extends Component{
    state ={

    }
    componentDidMount(){
        this._getData()
    }
    _callUrl = () =>{
        let CurrentUrl = window.location.href;
        // http:localhost:3000/board/제목 을 http:localhost:5000/board/제목 으로 변하게 만드는 줄인데
        // 나중에 서버 배포할때 문제 생기면 수정
        let ConvertUrl = CurrentUrl.replace("3000","5000")
        console.log(ConvertUrl)
        return fetch(ConvertUrl)
        .then(res => {
            let selectData = res.json()
            console.log(selectData)
            return selectData
        })
    }
    _getData = async () =>{
        const selectJSON = await this._callUrl()
        this.setState({
            title : selectJSON.SelectTitle,
            userwrote : selectJSON.Selectuserwrote,
            wrotedate : selectJSON.Selectwrotedate
        })
    }
    render(){
        return(
            <div>
            <Header/>
                <div>
                    {this.state.title ? this._SelectBoard() : "로딩중"}
                </div>
            </div>
        )
    }
    _SelectBoard = () =>{
        return <BoardRender title={this.state.title}
        userwrote={this.state.userwrote}
        wrotedate={this.state.wrotedate}
        />
    }
}
class BoardRender extends Component{
    render(){
        return(
            <div className ="showBoardItem">
                <p>{this.props.title}</p>
                <p>{this.props.userwrote}</p>
                <p>{this.props.wrotedate}</p>
            </div>
        )
    }
}
export default Viewboard