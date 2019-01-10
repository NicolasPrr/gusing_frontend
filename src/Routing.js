
const routing = (
    <Router>
      <div>
        <Header/>
        <Route path="/cipher" component={Loader} />
        <Route exact path="/" component={Home} />
        <Route path="/newChanel" component={CcreateChanel} />
        <Route path="/viewchannel" component={ViewChannel} />
        <Route path="/chanel/:id" component={IndexMenu} />
    </div>
    </Router>
  )