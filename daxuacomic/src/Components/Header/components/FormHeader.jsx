
import React from "react";
import { toast } from "react-toastify";

const FormHeader = ({ token, logout }) => {

  const logout_ = async () => {
    if (token) {
      logout()
      toast.success("Đăng Xuất thành công")
      window.location.reload()
    }

  }
  return (
    <div className="form form-login">
      <div className="btb_login">
        <button className="btn btnLogin" onClick={() => logout_()}>
          Đăng Xuất
        </button>
      </div>
    </div>
  );
};

export default React.memo(FormHeader);
