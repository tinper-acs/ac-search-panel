
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchPanel from '../src';
import './demo.scss';

const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


import Demo1 from "./demolist/Demo1";
var DemoArray = [{"example":<Demo1 />,"title":" 基础示例","code":"/**\n *\n * @title 基础示例\n * @description 基础示例\n *\n */\nimport React, {Component} from 'react';\nimport SearchPanel from 'app-component-templ';\nimport {FormControl,Row, Col,Label,FormGroup,Radio} from 'tinper-bee';\n\n\nclass Demo1 extends Component {\n    constructor(props){\n        super(props);\n        this.state={\n            state:'all',\n        }\n    }\n    stateChange(value){\n        this.setState({\n            state:value\n        })\n    }\n    typeChange(value){\n        this.setState({\n            type:value\n        })\n    }\n    degreeChange(value){\n        this.setState({\n            degree:value\n        })\n    }\n    search(){\n\n    }\n    clear(){\n\n    }\n    render() {\n        let searchContent=()=>{\n            return (\n                <div className=\"demo\">\n                    <div>\n                        <label className=\"demo-label\">状态:</label>\n                        <Radio.RadioGroup\n                            name=\"state\"\n                            selectedValue={this.state.state}\n                            onChange={this.stateChange.bind(this)}>\n                            <Radio.RadioButton value=\"all\">全部</Radio.RadioButton>\n                            <Radio.RadioButton value=\"initial\">初始化</Radio.RadioButton>\n                            <Radio.RadioButton value=\"todo\">待处理</Radio.RadioButton>\n                            <Radio.RadioButton value=\"doing\">处理中</Radio.RadioButton>\n                            <Radio.RadioButton  value=\"done\">已完成</Radio.RadioButton>\n                            <Radio.RadioButton  value=\"closed\">已完成</Radio.RadioButton>\n                        </Radio.RadioGroup>\n                    </div>\n\n                    <div className=\"margin-top-10\">\n                        <span className=\"demo-item\">\n                            <label className=\"demo-label\">名称:</label>\n                            <FormControl placeholder=\"请输入名称\"/>\n                        </span>\n                        <span className=\"demo-item\">\n                            <label className=\"demo-label\">编码:</label>\n                            <FormControl placeholder=\"请输入编码\"/>\n                        </span>\n                    </div>\n                </div>\n            )\n        }\n        return (\n            <SearchPanel\n                searchHead='基础示例'\n                searchContent={searchContent()}\n                searchClick={this.search}\n                clearClick={this.clear}\n                searchOpen={true}\n            />\n        )\n    }\n}\n","desc":" 基础示例"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('root'));