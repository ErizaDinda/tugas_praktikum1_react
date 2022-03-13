import React from 'react'
import Home from './halaman/home'
import Bmi from './halaman/bmi'
import Bank from './halaman/bank'
import Ppn from './halaman/ppn'
import Biner from './halaman/biner'
import Oktal from './halaman/oktal'
import Desimal from './halaman/desimal'
import Hexadesimal from './halaman/hexadesimal'
import { Route, Switch } from 'react-router-dom'

export default class Main extends React.Component {
    render() {
        return(
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/bmi" component={Bmi} />
                 <Route path="/bank" component={Bank} />
                 <Route path="/ppn" component={Ppn} />
                <Route path="/biner" component={Biner} />
                <Route path="/oktal" component={Oktal} />
                <Route path="/desimal" component={Desimal} />
                <Route path="/hexadesimal" component={Hexadesimal} />
            </Switch>
        )
    }
}