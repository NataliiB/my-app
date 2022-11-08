import classes from "./Profile.module.css";
import MyPostsContainer from "./My posts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { connect } from "react-redux";
import React from "react";
import axios from "axios";
import { setUserProfileCreator } from "../Redux/ProfileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    axios
      .get('http://localhost:3001/api/v1/profile'+ userId)
      .then((response) => {
        this.props.setUserProfile(response.data);
      })};
    render()
    {
      return (
        <div>
          <ProfileInfo {...this.props} profile={this.props.profile} />
        </div>
      );
    }
  
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});


export default connect(mapStateToProps, { setUserProfile:setUserProfileCreator })(withRouter(ProfileContainer));
