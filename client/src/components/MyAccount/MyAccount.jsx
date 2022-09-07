import React, { useState, useEffect, useContext } from "react";
import styles from "./MyAccount.module.scss";
import clsx from "clsx";
import axios from "axios";
import Header from "./Header";
import Sidebar from "../Sidebar/Sidebar";
import AuthApi from "../Home/Auth";

const Auth = {
    email: "giahanmai3110@gmail.com",
    fullname: "Mai Tran Gia Han",
    pass: "h12345",
    ava: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/27/08/jennifer-lawrence.jpg?quality=75&width=982&height=726&auto=webp",
    job: "Web design",
    facebook: "https://www.facebook.com/profile.php?id=100038694972797",
    insta: "https://www.facebook.com/profile.php?id=100038694972797"
}

function Overview() {
    return (
        <div className={clsx("tab-content pt-2", styles.overview)}>
            <div className={clsx("tab-pane fade show active")} role="tabpanel">
                <h5>Profile Details</h5>
                <div className={clsx("row", styles.info)}>
                    <div className={clsx("col-3")}>
                        Fullname
                    </div>
                    <div className={clsx("col-9")}>
                        {Auth.fullname}
                    </div>
                </div>
                <div className={clsx("row", styles.info)}>
                    <div className={clsx("col-3")}>
                        Email
                    </div>
                    <div className={clsx("col-9")}>
                        {Auth.email}
                    </div>
                </div>
                <div className={clsx("row", styles.info)}>
                    <div className={clsx("col-3")}>
                        Job
                    </div>
                    <div className={clsx("col-9")}>
                        {Auth.job}
                    </div>
                </div>
            </div>
        </div>
    )
}
function EditProfile() {
    return (
        <div className={clsx("tab-content pt-2", styles.editProfile)}>
            <div className={clsx("tab-pane fade show active")} role="tabpanel">
                <form>
                    <div className={clsx("row", styles.info)}>
                        <div className={clsx("col-3")}>
                            Profile image
                        </div>
                        <div className={clsx("col-9")}>
                            <img src={Auth.ava}></img>
                            <div>
                                <i className="fa-solid fa-upload"></i>
                                <span>Upload your photo</span>
                            </div>

                        </div>
                    </div>
                    <div className={clsx("row", styles.info)}>
                        <div className={clsx("col-3")}>
                            Fullname
                        </div>
                        <div className={clsx("col-9")}>
                            <input type="text" value={Auth.fullname}></input>
                        </div>
                    </div>
                    <div className={clsx("row", styles.info)}>
                        <div className={clsx("col-3")}>
                            Email
                        </div>
                        <div className={clsx("col-9")}>
                            <input type="text" value={Auth.email}></input>
                        </div>
                    </div>
                    <div className={clsx("row", styles.info)}>
                        <div className={clsx("col-3")}>
                            Job
                        </div>
                        <div className={clsx("col-9")}>
                            <input type="text" value={Auth.job}></input>
                        </div>
                    </div>
                    <div className={clsx("row", styles.info)}>
                        <div className={clsx("col-3")}>
                            Facebook
                        </div>
                        <div className={clsx("col-9")}>
                            <input type="text" value={Auth.facebook}></input>
                        </div>
                    </div>
                    <div className={clsx("row", styles.info)}>
                        <div className={clsx("col-3")}>
                            Instagram
                        </div>
                        <div className={clsx("col-9")}>
                            <input type="text" value={Auth.insta}></input>
                        </div>
                    </div>
                    <div className={clsx("text-center")}>
                        <button className={styles.btn}>SAVE CHANGES</button>
                    </div>
                </form>

            </div>
        </div>
    )
}
function ChangePassword() {
    return (
        <div className={clsx("tab-content pt-2", styles.editProfile)}>
            <div className={clsx("tab-pane fade show active")} role="tabpanel">
                <form>
                    <div className={clsx("row", styles.info)}>
                        <div className={clsx("col-3")}>
                            Current Password
                        </div>
                        <div className={clsx("col-9")}>
                            <input type="text"></input>
                        </div>
                    </div>
                    <div className={clsx("row", styles.info)}>
                        <div className={clsx("col-3")}>
                            New Password
                        </div>
                        <div className={clsx("col-9")}>
                            <input type="text"></input>
                        </div>
                    </div>
                    <div className={clsx("row", styles.info)}>
                        <div className={clsx("col-3")}>
                            Comfirm new password
                        </div>
                        <div className={clsx("col-9")}>
                            <input type="text"></input>
                        </div>
                    </div>
                    <div className={clsx("text-center")}>
                        <button className={styles.btn}>CHANGE PASSWORD</button>
                    </div>
                </form>

            </div>
        </div>
    )
}
function MyAccount() {
    const [checkMenu, setCheckMenu] = useState(true);
    const [option, setOption] = useState(1);

    //const { Auth } = useContext(AuthApi);
    useEffect(() => {
        console.log("Logged with account: ", Auth.Auth);
        const getData = async () => {
            try {

            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);
    const clickMenu = (e) => {
        setCheckMenu(!checkMenu);
        e.preventDefault();
    };
    const chooseOption = (num) => {
        setOption(num);
    }

    return (
        <div className={clsx("container-fuild")}>
            <Header clickMenu={clickMenu} />
            {checkMenu ? <Sidebar index={7} checkOpen={checkMenu} /> : null}
            <div className={clsx("row", styles.content)} style={checkMenu ? { width: "80%", marginLeft: "14rem" } : { width: "100%", marginLeft: "2.6rem" }}>
                <div className={clsx("row", styles.prof)}>
                    <h4>Profile</h4>
                </div>
                {/* PC */}
                <div className={clsx("col-3 d-none d-xl-block", styles.intro)}>
                    <div className={clsx("card", styles.cardIntro)}>
                        <div className={clsx("card-body d-flex flex-column align-items-center")}>
                            <img src={Auth.ava}></img>
                            <p>{Auth.fullname}</p>
                            <div className={styles.social}>
                                <a href={Auth.facebook} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
                                <a href={Auth.insta} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={clsx("col-8 d-none d-xl-block", styles.container)}>
                    <div className={clsx(styles.tags, "card")}>
                        <div className={clsx("card-body pt-3", styles.cardBody)}>
                            <ul className={clsx("nav nav-tabs nav-tabs-bordered", styles.nav)} role="tablets">
                                <li className={clsx(styles.navItem)} role="presentation" >
                                    <button className={clsx("nav-link active")} data-bs-toggle="tab" aria-selected="true" role="tab" style={option === 1 ? { borderBottomStyle: "solid", borderColor: "black", fontWeight: "500" } : null} onClick={() => chooseOption(1)}>Overview</button>
                                </li>
                                <li className={clsx(styles.navItem)} role="presentation">
                                    <button className={clsx("nav-link active")} data-bs-toggle="tab" aria-selected="true" role="tab" style={option === 2 ? { borderBottomStyle: "solid", borderColor: "black", fontWeight: "500" } : null} onClick={() => chooseOption(2)}>Edit Profile</button>
                                </li>
                                <li className={clsx(styles.navItem)} role="presentation">
                                    <button className={clsx("nav-link active")} data-bs-toggle="tab" aria-selected="true" role="tab" style={option === 3 ? { borderBottomStyle: "solid", borderColor: "black", fontWeight: "500" } : null} onClick={() => chooseOption(3)}>Change Password</button>
                                </li>

                            </ul>
                            {option === 1 ? <Overview /> : option === 2 ? <EditProfile /> : <ChangePassword />}
                        </div>
                    </div>

                </div>
                {/* TABLET & MOBILE */}
                <div className={clsx("row d-lg-block d-xl-none", styles.intro)}>
                    <div className={clsx("card", styles.cardIntro)}>
                        <div className={clsx("card-body d-flex flex-column align-items-center")}>
                            <img src={Auth.ava}></img>
                            <p>{Auth.fullname}</p>
                            <div className={styles.social}>
                                <a href={Auth.facebook} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
                                <a href={Auth.insta} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={clsx("row d-lg-block d-xl-none", styles.container)}>
                    <div className={clsx(styles.tags, "card")}>
                        <div className={clsx("card-body pt-3", styles.cardBody)}>
                            <ul className={clsx("nav nav-tabs nav-tabs-bordered", styles.nav)} role="tablets">
                                <li className={clsx(styles.navItem)} role="presentation" >
                                    <button className={clsx("nav-link active")} data-bs-toggle="tab" aria-selected="true" role="tab" style={option === 1 ? { borderBottomStyle: "solid", borderColor: "black", fontWeight: "500" } : null} onClick={() => chooseOption(1)}>Overview</button>
                                </li>
                                <li className={clsx(styles.navItem)} role="presentation">
                                    <button className={clsx("nav-link active")} data-bs-toggle="tab" aria-selected="true" role="tab" style={option === 2 ? { borderBottomStyle: "solid", borderColor: "black", fontWeight: "500" } : null} onClick={() => chooseOption(2)}>Edit Profile</button>
                                </li>
                                <li className={clsx(styles.navItem)} role="presentation">
                                    <button className={clsx("nav-link active")} data-bs-toggle="tab" aria-selected="true" role="tab" style={option === 3 ? { borderBottomStyle: "solid", borderColor: "black", fontWeight: "500" } : null} onClick={() => chooseOption(3)}>Change Password</button>
                                </li>

                            </ul>
                            {option === 1 ? <Overview /> : option === 2 ? <EditProfile /> : <ChangePassword />}
                        </div>
                    </div>

                </div>

            </div>



        </div>
    );
}

export default MyAccount;
