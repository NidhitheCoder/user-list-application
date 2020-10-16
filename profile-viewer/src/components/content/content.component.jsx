import React from "react";
import "./content.styles.scss";
import { connect } from "react-redux";

const ContentSection = ({ currentUser }) => (
  <div className="right-menu">
    <div className="profile-container">
      <div className="img-container">
        <img
          src={currentUser && currentUser.imgUrl}
          className="profile-img"
          alt="User"
        ></img>
        <div className={`status ${currentUser && currentUser.status}`} />
      </div>
      {console.log(currentUser)}
      <span className="name">{currentUser && currentUser.name}</span>
      <p>{currentUser && currentUser.email}</p>
      <p> User since : {currentUser && currentUser.created_at}</p>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
        iaculis leo. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Phasellus tempor luctus sem vel imperdiet. Donec gravida
        consequat tortor sit amet molestie. Aenean accumsan, lacus non pharetra
        viverra, arcu tortor vulputate urna, eu volutpat lorem leo eu quam.
        Maecenas sodales viverra justo sit amet consequat. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed
        sollicitudin libero libero, lobortis venenatis quam interdum consequat.
        Mauris feugiat laoreet purus vehicula cursus. Nunc tincidunt ex ac quam
        ultricies fermentum. Sed turpis diam, imperdiet et urna et, mattis
        blandit purus. Donec auctor odio sollicitudin elit semper scelerisque.
        Quisque ut consequat turpis. Nunc vel sodales dolor, sed consectetur
        mauris. Nam placerat eleifend nisi. Aenean molestie est vitae dui
        porttitor condimentum. Donec ut magna nisl. Curabitur vitae tellus
        posuere, interdum purus id, volutpat magna. Vestibulum lectus arcu,
        tristique at quam id, luctus fermentum leo. Donec eleifend arcu at
        vehicula egestas. Donec bibendum felis eu dolor tempus laoreet. Etiam
        convallis leo vitae magna vulputate accumsan ac eu est.
        <br />
        In semper lorem sit amet erat dignissim tristique. Integer eu mi laoreet
        metus pretium ornare. Nullam mi mauris, consequat sit amet blandit nec,
        sagittis eu tellus. Aenean lobortis ullamcorper elit in tempor. Nullam
        suscipit quam dolor, at luctus tortor pulvinar et. Quisque aliquam
        mauris ultricies erat dictum, a scelerisque diam fringilla. Donec in
        velit pretium, convallis magna eget, pellentesque nulla. Nullam commodo
        viverra erat, et ornare lectus. Curabitur consequat rutrum leo, et
        vulputate velit. Nullam dolor est, euismod at sem ut, laoreet dictum
        ipsum. In scelerisque vestibulum augue, non fermentum nulla ultrices
        efficitur. Vestibulum pretium lorem magna, ut hendrerit justo porta
        quis. Mauris rutrum metus quis risus blandit, non placerat ante
        vehicula. Vestibulum vestibulum sem nec purus viverra, ac aliquam velit
        rhoncus. Nullam mi ipsum, dignissim et leo sit amet, luctus tincidunt
        tortor. Nunc odio dui, viverra eleifend placerat non, tempus at ipsum.
        Maecenas non dolor ullamcorper, commodo nibh id, ultricies risus. Nunc
        dignissim, leo eget tincidunt malesuada, sem dui suscipit turpis, quis
        efficitur nulla erat vitae felis. Cras egestas tortor purus, tristique
        euismod sem faucibus eget. Suspendisse tincidunt cursus arcu, a dictum
        libero egestas porta. Suspendisse lectus eros, posuere ullamcorper erat
        sed, congue semper sapien. Suspendisse ullamcorper tortor odio, quis
        congue ipsum vehicula a. Fusce dui eros, bibendum sit amet erat eu,
        molestie rhoncus leo. Nam malesuada purus sit amet orci egestas luctus.
        Maecenas quis sapien eu diam interdum dapibus. Pellentesque non felis
        justo. Aliquam eleifend massa urna, venenatis fringilla nunc congue in.
      </p>
    </div>
  </div>
);

const MapStateToProps = ({ userData: { currentUser } }) => ({
  currentUser
});

export default connect(MapStateToProps)(ContentSection);
