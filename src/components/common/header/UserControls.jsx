import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '../ui';
import { RiUser5Fill } from 'react-icons/ri';
import { GoogleLogin } from '../../auth';

export const UserControls = () => {
  const authenticated = useSelector(({ auth }) => {
    return auth.authenticated;
  });
  const dispatch = useDispatch();

  return (
    <>
      {authenticated === true ? (
        <div className="flex gap-2">
          <Link to="/profile" title="Profile">
            <Button element="span">
              <RiUser5Fill></RiUser5Fill>
            </Button>
          </Link>

          <Button
            title="Log Out"
            type="button"
            skin="primaryInverted"
            onClick={() => {
              dispatch({
                type: 'auth/logOut',
              });
            }}
          >
            Log out
          </Button>
        </div>
      ) : (
        <GoogleLogin></GoogleLogin>
      )}
    </>
  );
};
