import React, {Component} from 'react';
import axios from "axios";
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Grid} from '@material-ui/core';
import Title from './Title'
import Input from '@material-ui/core/Input';

import ListIcon from '@material-ui/icons/List';
import './List.css'
// "name": "TexLive-iso",
// "url": "/texlive-iso/",
// "help_url": "",
// "size": 0,
// "last_timestamp": 0,
// "status": 0

//Unix时间戳转时间
function timeTransfer(last_timestamp) {
    let unixTimestamp = new Date(last_timestamp * 1000);
    let commonTime = unixTimestamp.toLocaleString();
    return commonTime;
}

//将数字转换成带逗号格式
function formatNumber(num) {
    if (isNaN(+num))
        return "";
    return (num + "").replace(/(?<!.*\..*)\B(?=((\d{3})+)\b)/g, ",")
}

//创建表格数据
function createData(name, url, help_url, size, last_timestamp, status) {
    let Name;
    if (help_url != '') {
        Name =
            <div>
                <a href={"/" + url}>{name}</a>
                <a href={"/" + help_url} class="Help">HELP</a>
            </div>;
    } else {
        Name = <a href={"/" + url}>{name}</a>;
    }
    let update_timestamp = timeTransfer(last_timestamp);
    let Size = formatNumber(size) + ' MB';
    return {Name, update_timestamp, Size, status};
}


export default class List extends Component {
    state = {
        // 镜像列表
        mirrorsList: null,
        // 是否已经获取了镜像列表
        loaded: false
    };

    /**
     * 获取镜像列表
     */
    fetch_mirrors_list = () => {
        this.setState({
            fetching_slots: true
        });
        axios({
            url: "/static/sync.json",
            method: "get"
        }).then(response => {
            const mirrorsList = response.data;
            mirrorsList.sort((a, b) => {
                return a.name < b.name ? -1 : 1;
            });
            this.setState({
                mirrorsList: mirrorsList,
                loaded: true
            });
            console.log("in fetch_mirrors_list", mirrorsList);
        });
    };
    
    //测试数据
    rows = [
        createData('TexLive-iso', '/texlive-iso/', '/guide/Ubuntu.html', 10000, 1628791606, 0),
    ];

    componentDidMount() {
        this.fetch_mirrors_list();
        console.log("in componentDidMount", this.state.mirrorsList)
    }

    render() {
        return (
            <React.Fragment>
                <Grid container spacing={2}>
                    <Grid item sm>
                        <Title><ListIcon color="primary"/> 镜像列表</Title>
                    </Grid>
                    <Grid item sm>
                        <Input placeholder="搜索" inputProps={{'aria-label': 'description'}}/>
                    </Grid>
                </Grid>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>镜像名称</TableCell>
                            <TableCell>大小</TableCell>
                            <TableCell>最近同步时间</TableCell>
                            <TableCell>同步状态</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.rows.map((row) => (
                            <TableRow hover role="checkbox" key={row.id}>
                                <TableCell>{row.Name}</TableCell>
                                <TableCell>{row.Size}</TableCell>
                                <TableCell>{row.update_timestamp}</TableCell>
                                <TableCell>{row.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                {/*<div className={classes.seeMore}>*/}
                {/*    <Link color="primary" href="#" onClick={preventDefault}>*/}
                {/*        See more orders*/}
                {/*    </Link>*/}
                {/*</div>*/}
            </React.Fragment>
        )
    };
}
