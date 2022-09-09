import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.scss";
import clsx from "clsx";

function Sidebar(props) {
  return (
    <div className={clsx( styles.sidebar)}>
      <div
        className={styles.option}
        style={
          props.index === 1
            ? { backgroundColor: "rgba(83, 83, 83, 0.3)" }
            : null
        }
      >
        <img src="data:image/png;base64,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"></img>
        <Link to="/transaction">Transaction</Link>
      </div>
      <div
        className={styles.option}
        style={
          props.index === 2
            ? { backgroundColor: "rgba(83, 83, 83, 0.3)" }
            : null
        }
      >
        <img src="https://cdn-icons-png.flaticon.com/512/3501/3501061.png"></img>
        <a href="#">Charts</a>
      </div>
      <div
        className={styles.option}
        style={
          props.index === 3
            ? { backgroundColor: "rgba(83, 83, 83, 0.3)" }
            : null
        }
      >
        <img src="https://cdn.iconscout.com/icon/free/png-256/list-table-1918608-1625905.png"></img>
        <Link to="/table">Tables</Link>
      </div>
      <div
        className={styles.option}
        style={
          props.index === 4
            ? { backgroundColor: "rgba(83, 83, 83, 0.3)" }
            : null
        }
      >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ6zmV8kLQBK1ArqArSbXOq6Rh_Oy3_HT5lA&usqp=CAU"></img>
        <a href="#">Contact</a>
      </div>
      <div
        className={styles.option}
        style={
          props.index === 5
            ? { backgroundColor: "rgba(83, 83, 83, 0.3)" }
            : null
        }
      >
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABOFBMVEUAAAD/////02zq7PD8tlEmz63+26v/2nD/124AsZLu8PXZ29+srbDz9flNTU87PD3DolO7uMdoVixubm7QrFiqjUgZinP/4bAYFRD/u1N9bFUn1bLsy5/rwmMxKBX/vVSenp72zGgyMTV8eoQrKyuLi4uReD2JcToiIiIjvp/ctl0VFRXNzc06MBl7ZTTg4OC+vr6AgIAAq40lyagKNi1QQiK2lk1wXS/np0ofGQ0AbVoblXwRXE2ihkWhoqVoaGi4uLhZWVnHx8daSiZeRB5sTiOqezfCjD7YnEa5hTuMZS0ADwxGOh4FGhYNRzwGIhwXemZFMRZmSSGDXyoqHw4APDIfFgqLZC0AUkNBLxUbkXmenKhraXOHhZBSUFesqbdbTz2vl3bXuZFMQTORfWLbvZOpknI4MSYa7oT7AAAOGUlEQVR4nO2dCVcaSxbHscHpRgUZRSOPtNoJLuCCoiKCGBdifHHNS/LGmGWSzOS97/8Nphe69mqqmm6gGf7n5JwINF0/blXdW7eqq2JjgSt1PrXyKl3YiJlaf5HeXT6dTAV/F2HFgv268vLseoyh6d3TcrB3ElaQhJu7L1h0rtLLfYEMjDC+suGF14Y8Dep24gqIcHO2M56j5XgwdxRWIISTZ6J8llZ6yxgAYVzYfsCO3d9UXN0TLsvymSpsBlB0QXVLODnNZlhYvDkwtfWBw7gbSOlF1CUhy4CL282srhuKpqqaYuilzOrMQh/N2B0h3cPMVHVF1UwpbZn/NUFLzS3qoz1qjd0QlkkPeFC16BSGTEx9layxs4FReKkLwnOiwNslVcOpMFpNVTIH+BXpXsSr/gl3CD4d8JkGM2XophTzP2iNzd5gF033wDX6JjzF6yewn9nq9OrqwZH7zuJMM2No8N0qdt1G+Ih+CXHAaptAU43MNqPjvGmWXEtqxjb6znroiD4JsTZ4oattvtLaUYyjmznD+ZSiZrCKGnZb9EdYRsu46pjH5Lvg4dlaWG0zajraGtMBE5HyRZhC3UTGKbaqe/PZairOj6GhNTVkp+GLEHX0JRtQU5qd+UwtZtu/xyry4lTQUJj8EK4gNa9kG0Ut3VAwHK05ZlTRXyTUsb8Pwk2kbLpT3CrJ4aEtnUKcDp4LygchkmpyLKit0RwLi+9arda7T6yxhVNT0Yq6EjwYkDwhUkczjo87JOleX17VcktLOfNfonb1lojV3M5JRa4LsZ5KEyKOoul0MjN48VtvErlcAsr8o3ZJuMmq09/A8UaI9VSaEPajM44lcMDXNQwPUP6+SFtR0+EL4SXhZAmRYMbQqDbYulqi8dqMl1g0l9XwHmo9tNBGlhDmfO1GqM6hxb5k2Q8w1l6jn7V/H6QCnISCNyZNCE04Y1uwhJT5A9eALuMl8ukD+3oD/L0RDp80YRqUyPFqSA/SSngY0NHSFYK4quJ1IKzIRo5wkygf0gj/6IRnW/EKaYyOMwU90Dr/risr570i3IXNiKijLRFACxFecmP3p7Cz4STfpux85ZnvnkiKMIWbUIOu/JMYoIn4BiJWcSOyxhgpEF+86gnhKW5CZCRb69gGASLsbhYUrCVuUGYqwzrDNXGwhK/cux3aJoTjid+FAU3EFrhszjIi7E538Lttgtt1ZUQpQnA3y19rWfBnq4ObwFUD123ZRgSjYayanlLTBT4zOjKEO3jJoLeuyQAmcm/BhRnsl4JxTeqEMVfuc6pDhhC0ijUVq11vJeqojQiuPLTdPvizPcKII8MXVP66UxnCgnsru5JCXy1nQqyzMbBqas9kTHKnI/1NdEgQxt07HdnlAq7itaQJTYFCWw4DukSzIW56TCcXwiYEAc2BVUnhyOdKGjD33r12W0UHUeunoJog2gf/8zXEkiCccm/UxPqHD1IdqUMIIxsVHwnTemwU793/+xonSxCC9mH1gDDLItvP2ALpGyuAV8k0CNRxI5lMzoM//YSnEoSghdilAr7ijQ/CpT/YvxaheiVp69Z9wU9+XIIQuGC8ZvmwINKbmjVeU5iE+w9JV3Xwoo+MlThhynXCC1hHs+CnksL4+1A1qqxm+HE+CVW5dl/2MQMgTgicxRbW/7X8ECZAV3PTZM1WPTaSmI7BO/KhmzghSCNeYITvfREmYh46riQJVcB78rljH4TWwAI6C19daSL3J5fvgeJLJouP7rv0ECsEwu0ACJf4hA0aMJlsgLelc3L9IczlGFPhbV0zbJgsgsCGn84JjnCmW8Jc7S2JheqehfgE3pYN3Xre0+RyV+9jtG5hdxnbZyECI74IjTAQb5FbegOTGEjNnN/L33lb8QG8K5mw8eHx7ZhGdxuSjMfPJYgJmrbNGvn8+Pge+tITRVgBodtZWIQwarOTgCANJc5XQ7P6QI8Vi298PF9BX6V9ot/QTYIQZPRLfiLvpRqr+cXqRRvPRpxH37h9II0I3pJL2HQ/evqXAGFu6QqbeHL1sAf4LMQ69uZtvVJEHYbP0K37EfCfHQlziTfvGHj3T+MoH41ojS8Q/w8dhlTo5juLYQCffeWNmEtcfmLw3TVIPhaiRfl4bOpxH30tJEIiEwWWQHl6xKXaW1aAdtzuXijEecaHacnMxMn8HMBdZLEMGT+bmMtxuxcmH9Wj8iQTugWREeb0NbkEs3u5x7sXCnHvmHERqZ3OpfVDKJXVN707q3vZb3jyOWbcZ1yISyJhE9LMjNm9sKKXuwqje6ERx+evGRdjEg/dpAhBtu2QmCAlZtc4g4fjpABem7HRwY7ic21+Z0g17gypOXhgNb/rh6Ion82YT9YZkCA5LB66CROm4vE4XPHlzHLDNbOfIB9z8HA/37H5MQxZbNTvQH29vqs/FYvgG4VDNwHC+M5uurBhLQtGlgZTKxVyDh9n8CDS/JiWHN/bKyYrlWRxb8/6Kw872qAI48vM53odh4GuNmnlcmb3wvroI8e7S4G6gkYUnWvzJizzHy10Vgwhy0dbV7zupUs+HBZm3QIgTO2yitwWveqLpQcseskj8osIYx7B0M2D8NS78IyVe4TQwYPJtNeYr9/t39/e3388fmgUx/1R5kEPKzjXxifs+Oyrs7qQsQLa0ccGQLDo6rfkBx7n+eGpByFMnYrNtfEIU2myQJQu7HpKrKB1hQwe8vnKMSdGuXvy4UTAd511Q5jy3Dugraaqqfo2a2YFGTzk842PHt9x7R2HswjhAEvI63MIqfn09cKLthDvkWE+B4QVWiCMfpB0ljApJxS6sQnxKjr98vM/EbEdpKt9NDchNhS6bUgh5mHqVCRhwyTEVux8w/BMffYoLD54yFc6jhEcHUtVVej1RRI2LEL00bsCyWfqC7eguHdnZV04uhUedljfCyqGyFwbixBphGc0nylmN3RdJwcPd6yPHX04Ys47ydTUJLhKIHRjEC7D275k8X1mORJq8JDfI7uYhZlmtqQbhqGXstVtavJ+XhwRznEILJNiEMKbfmHwfWUZkJGbIAEPswZ4Tt96Rl/Rm8QzURKIMHTrPNdGE0ITfqP5XjLwzO6FEZvggKsG/iS780h0Bn+mTxxRJnSjCUErXCfx/s3sYo5ZY/c81ga33UeAKcgMFi8It0UkdOuYsKEI4QMHX4nm942Bx8lNIC7Lfm6Uuc+CzWhgca1womMPpDPOpAnBiKmA87H2MLnl5CawtO6FwuWzk5Lok937wkaEP2Gn0I0iBCSoCb+y4hhk8ED+woijX2NXUARRR7xHXdiI4JJOy6RIQjA5EYPN7yVrjytr8MAT4umbdgfqKVVHPEeS/628e3QI3UhC0AwLL9v6wuK7rj89zfOENMLFOREhbfEj91u5N5mdsnTOq60k4QkDJyKaZk9mkIScZfLR0DTLjiShV/IpAmJ4R5JQemeyARNtxWEjpEPxYSOkx1NDR0gZcegIqc6GS3gyFSlBL0dWUy7h5ESklALrmciJRT5hPFqadAtORuIjwshoRDgiHHx1RTgx0b+CewotWFeEK+npwVR6JRhCzk7BA6HpAAgnBjtSnZ3onrA/JRdW94Rl9hcPjMpdE06yv3hgRJVzRDgiHDgFSHioDpIOQyCc6TSJ1EvBtWYjwhHhiLBfGhGOCEeE/deIcEQ4Iuy/RoQjwhFh/zUiHBEODKFzvplnniaeclSOIKG1tra6enGztcgQWFdccBU5Qk3TeZt+eisqhGqJ/eTmsBASDykMH6Fa4h3QOiSE+OF6Q0jo+QT8MBB2Z8EIENLbNCyIKTKECvY02/cfP5//Q0jPo0KI7e39269nz8T4okOIHlQW+ymMFyFCeBJE7Oi5DGBUCFET/pICjAwhdIU/5AAjQwgeff4uCRgVQrhT4U9JwIgQwh3g/iMLGBVC0Az/K1tJI0IIt2SSrqRRIQT5pV/DSngx9IQzQ08IYrZhbYcaOKv7ryHtS+Huy9IhTVQIYeAtOO6NGqGigSyitMuPCiFMBMsaMSqEMA3193COntCtib8PKSGSLP0ulcaICiFqxNjCD/FUW4QI0WRb7O+/nj8TVGQIFbUaw3T0/TcxRYYQTSj60uATKprf2d/IECoa/1zSISHkH0w6NISKmmVtzz9MhIqmNNnlHxpC04xK0+sg5CEgtNYMlZozN2yM4SC0130pOlMGCO42Jx2dR5KwjcnaTRL4zLLzuPpEKGsTO+5q6Vf0fchb92T1pdlMsiEJ25TXuk+JZOwFoabLdwLCmoP30kpWl3pgaD0nNPjn3QaBqAFA54UFo9eEWjeBVWcBIBCjrmo9JlRZ5z4EqFIbSHNfuFB7TKj1nLDnNvS/xFVIBvlLrvXchlg+JXCBVgdO6NN7bUP0cMDgtQZx2rM12d57C3OAkxHaytqHdMzjG9W5DLmve4+eKAktatOo+5C3HppnZrgaEY4IOYThtTtphUJ4kM0MjrIHIRAOqEaEI8L/B8I4+4sHRvGuCSeooxAHSgXpvS/BCR6AcIr91QOiKWlCsD/9jnvpxCAfPXMyIV1Ll90ProBrJ+L9PhaAqzjcKlmYEKT/0ylwcbzfxwJwBYsoTgi7zs1B3eOaLWFCeMgqasQISJwQNMTYSaQQxQkRD78TJURxQvSkmakIIUoQomHabDkVlf5GghA/em33fNLdH2WwJbx7iyV8I/2N6XQkBGwiQDjo27B7izzJmkWInLYaQZGnIDIJo4xIHdXNJhwrex8RP8DqeLIc0GAfa8FVmgLhEo5tsg4YH3S9oI+T5xOajJGzI+kpOhGOjaXOl18VNvpdbjFtTC8zD8z9H4J7y/imh12OAAAAAElFTkSuQmCC"></img>
        <Link to="/mywallet">My wallet</Link>
      </div>
      <div
        className={styles.option}
        style={
          props.index === 6
            ? { backgroundColor: "rgba(83, 83, 83, 0.3)" }
            : null
        }
      >
        <img src="https://thumbs.dreamstime.com/b/category-icon-range-151047418.jpg"></img>
        <Link to="/categories">Categories</Link>
      </div>
      <div
        className={styles.option}
        style={
          props.index === 7
            ? { backgroundColor: "rgba(83, 83, 83, 0.3)" }
            : null
        }
      >
        <img src="data:image/png;base64,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"></img>
        <Link to="/myaccount">My account</Link>
      </div>
    </div>
  );
}

export default Sidebar;
