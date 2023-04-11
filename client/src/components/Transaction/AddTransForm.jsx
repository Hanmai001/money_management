import React, { useState, useEffect } from "react";
import styles from "./AddTransForm.module.scss";
import clsx from "clsx";
import axios from "axios";

function Wallet(props) {
  const [idWallet, setData] = useState(props.id);
  const [nameWallet, setNameWallet] = useState(props.name);
  return (
    <div className={clsx("row", styles.wrapper)}>
      <button
        className={clsx("col-8", styles.wallet)}
        onClick={() => props.chooseWallet(idWallet, nameWallet)}
      >
        <p>{props.name}</p>
        <img src="data:image/jpeg;base64,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"></img>
        {props.curWallet === props.id ? (
          <i className="fa-solid fa-check"></i>
        ) : null}

        <p>{props.leftover}</p>
      </button>
    </div>
  );
}
function Category(props) {
  const [idCateg, setData] = useState(props.id);
  const [nameCateg, setNameCate] = useState(props.name);
  return (
    <div className={clsx("row", styles.wrapper)}>
      <button
        className={clsx("col-8", styles.categ)}
        onClick={() => props.chooseCateg(idCateg, nameCateg)}
      >
        <p>{props.name}</p>
        <img src={props.img}></img>
      </button>
    </div>
  );
}
function LstWallet(props) {
  const [lstWallet, setLstWalltet] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/wallets");

        console.log("lst_wallet: ", res.data);
        setLstWalltet(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div className={clsx(styles.modalWallet)}>
      <div className={clsx("col-12", styles.header)}>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={props.open}
        ></button>
        <p>Select Wallet</p>
      </div>
      <div className={styles.scroll}>
        {lstWallet.map((wallet) => (
          <Wallet
            key={wallet.id}
            chooseWallet={props.chooseWallet}
            curWallet={props.curWallet}
            id={wallet.id}
            name={wallet.name}
            leftover={wallet.consumed ? wallet.initialBalance - wallet.consumed : 0}
          />
        ))}
      </div>
    </div>
  );
}
function LstCateg(props) {
  const [lstCateg, setLstCateg] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/categories");

        console.log("lst_categ: ", res.data);
        setLstCateg(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div className={clsx(styles.modalCateg)}>
      <div className={clsx("col-12", styles.header)}>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={props.open}
        ></button>
        <p>Select Category</p>
      </div>
      <div className={styles.scroll}>
        {lstCateg.map((categ) => (
          <Category
            key={categ.id}
            chooseCateg={props.chooseCateg}
            id={categ.id}
            name={categ.name}
            img={categ.img}
          />
        ))}
      </div>
    </div>
  );
}

function AddTransForm(props) {
  const [openWallet, setOpenWallet] = useState(false);
  const [openCateg, setOpenCateg] = useState(false);
  const [data, setData] = useState({
    name: "Choose your wallet",
    categoryId: "",
    walletId: 1,
    date: "01/01/2001",
    note: "",
    amount: 0,
  });
  const [nameCate, setNameCate] = useState("Category");

  const openLstWallet = () => {
    setOpenWallet(!openWallet);
  };
  const openLstCateg = () => {
    setOpenCateg(!openCateg);
  };
  const chooseWallet = (id, name) => {
    setData((prev) => ({
      ...prev,
      name: name,
      walletId: id,
    }));
    setOpenWallet(!openWallet);
  };
  const chooseCateg = (id, name) => {
    setData((prev) => ({
      ...prev,
      categoryId: id,
    }));
    setOpenCateg(!openCateg);
    setNameCate(name);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    //k dc xai event trong setter
    setData((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        //name luu toan bo gtri value
        [name]: value,
      };
    });
  };
  const changeConsumeWallet = async (data) => {
    try {
      let getWallet = await axios.get(
        `http://localhost:5000/wallets/${data.walletId}`
      );
      getWallet.data.consumed = parseFloat(getWallet.data.consumed) + parseFloat(data.amount);
      await axios.put(`http://localhost:5000/wallets/${data.walletId}`, getWallet.data
      )
    } catch (err) {
      console.log(err);
    }
  };
  const addTrans = async () => {
    const headers = {
      Authorization: "Bearer my-token",
      "My-Custom-Header": "foobar",
      "Content-type": "application/json",
    };
    try {
      const date = new Date(data.date);
      const year = date.getFullYear();
      const month = ("0" + (date.getMonth() + 1)).slice(-2);
      const day = ("0" + date.getDate()).slice(-2);
      data.date = `${day}/${month}/${year}`;

      const res = await axios.post(
        "http://localhost:5000/transactions", {
        ...data,
        amount: parseFloat(data.amount)
        
      },
        {
          headers,
        }
      );

      console.log("Posted a Transaction", res);
      changeConsumeWallet(data);
      props.openAdd();
      //window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={clsx(styles.modal)}>
      <div className={clsx(styles.modalContainer, "d-none d-md-block")}>
        <div className={clsx("col-12", styles.header)}>
          <p>Add transaction</p>
        </div>
        <div className="row">
          <button
            className={clsx("col-3", styles.wallet)}
            onClick={openLstWallet}
          >
            <p>Name</p>
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBEWFRgVFRUYGRgaGBoYGhwaGBkcHRgVGBgZGhgcGBgcIy4lHB4rHxgYJjgmMC8xNTU2GiQ7QDszPy40NTEBDAwMEA8QHhISHzQsJCs0NDQ0NDQ0PTE0NDQ0NDQ0NDQ0NDQ0NTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgIDAAAAAAAAAAAAAAAABQYBBAIDB//EAEcQAAIBAgEHBwcKBAQHAAAAAAABAgMRBAUGEiExUXEHQWGBkbHBEyIyQnKh0RQjNFJ0gpLC4fAkQ7LDFWKDohZEVLPS4vL/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEAQUG/8QAOREBAAECAwMJBQUJAAAAAAAAAAECAwQRMRIhQQUTUWFxkbHB0TNCgaHhFCIyQ9IVNFNygpKisvD/2gAMAwEAAhEDEQA/APXgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXAA4ucd67UcfLR+tHtQHYAAAAAAAAAAAAAAAAAAABEZ0Zchg8PKtKLm7qMYp20pS2K/MtT7AJcFBqZ6Ymy8ynF9bs913LX2HVRzrxc5wi5wipVIQbio3ipSSutK+8r5ynRtnk+9TEzVlGW/X0zehgiYYqlH0sTpe1OmvdFRNfEZbwyeurF8JXJzOTHFMzpHim5VIrnOupiYpXepb3qRASzgw2i/nLPXzSfciNnlvBr0pTqPVdys9nQ7ENuOlfGGu1aUT3T6LJUypDUlJXbS1JvW1dd67SKnl6bfm6bXspW43sa0c7sKoWUZR5rKMbblaz2FVxuX6dSpfSloXtzXUdT1Ls7BFcTOqX2S/HuT3Lm8qVXLRtPdduy9JK6ttWs6YZTqyaWhUSe1yb83UrX367rqK3DOZuVouMYrUtJ3bS2Xd9tl7yRhlqi7XnF3WtqS6OY7mjNm5GtM90rBRqSe2V+tnYmyIw+U6V2lOL3ecvibCyhDmkhCu5GWqRla13w/fYYstqNaGOjsdmjlLEp7NSLcpUZ0rDTd4rgu45nmOU89MbRrzpRdJwjK0dKk29GyavJVFfbuMU+UbFL0qVGXBVI+Mu4r24bYwV+YiqKdd+scfi9PB55Q5SJXtPDRtzuNZ90oLvLnkfKlPE01Up3te0oy1ShNWupJc+tPc000diqJ0VXLFy1+OnJIAA6qAAAAAAAAAAAKZyoQvhqWu38TT96mvEuZTOVP6JTe7E0X16zk6Stse1p7Y8VNULc72vYlztvd0i3S+0yrv8A+fizPk30/wC39TE+slxS/d2NFGfJ/vS+CHk1uXbJ+I3OTMsaty7EHNbxoLo7Pjczopc/uS8AOqvLU7MgcNPzZSts124K5L5Tm4wk9ezf1eJF5Kp6SjG9k5qGxO2nKMW9fElGiFVURMZ8M5enU80MBopOndpWvpzTb3uzsYlmXgXsU1wn8bm5HJSSsq2IXT5Vtvp1pr3HL/CZ+risQuMqcu+Bq2ep85GIufxZ+flmi55i4V7KlZfeg1/Sdc8xKXq16i4pPusTH+GYheji5fep05d1h8ixy2Ymm/ao/CZzZp6FkYq/Gl7/AG/SgP8AgaovRxcvwtd0jDzRxq9HFJ8XNd1yweSykvXw0uMaq7mzKllJephnwnU7nEbNPRLs4u/OtdM9sR5xHzVDEZkYyTcnKjKT2tuV3ZWV3omrUzKxi2Uov2alu9ovPyvHr/loP2K0fzWOSyliV6WDn92pSl3SObFPWnGLvxHud9PlVDzHKGQ8RRV6tKUE3ZPSjJN2va9mr8S/cmmqlVV3tg9dvqtc3Ql2GjnjlPToqnKlUpyclOOmoqLUU72km9es3uTN/N1Vts6fdIjGUV5QuxFyq7hNquIic+GnjK7AAueOAAAAAAAAAAAUzlR+i0vtNL8xcym8qH0Sn9ppd8jk6Stse1p7Y8VRfP1m5jMlVqdKNadlCTSXO3pJyWpXtqRpvn6/EtOfeJ8nk2jK1/Ooq3GlIy26Iq1e9j8TXYinYy3zKnTrx3zts9GJ30aOkrq/bbuIHA42FSMnUejHTsrLnsnbStx5y0YSUGrRlfRsnvTstpdsURweXVjsRMfi7oj0RuJnovRtr6Xc6qLlJ1PRtBU3qW3T0ou929yZqZy1ZqUXF7FJvheEVfrfvO3N2tOdPESm3Jr5PBPVqinUsvcJppy3QssX783KZqr3Zx85iGcuStTduey7bMj8j05zdOMZJOVXRjdbJOSs+p6+o3suv5r7yIzA1ZwUJxeuM9KL3STumU06PXrz2py1yenLI+LWzGy+9TT8TnDAZSWzFU5e1Tt3JlQo51YxetF9S/Q3KOeuJW2EX2r8xdt0vLnC4qOFE/00+dMSs3k8rLZLDPi5p9mj4mHXysv5NGXsz/8AJog6efU+ej2NnfDP3fRfU/0O7VPSr+y4iPy6Z/t8phJrKmVI+lg0/ZnDwmzl/j2MXpYGr928u5MjKvKNhoO06dS/Rrtx1nZS5ScA9vlI8ab8CUb+P/dymvdOVVqnPtq/Wk1nNU9bCYhcKcn4HNZ10fWpVo8ab+Jp0+UHJr/mtcYSXgbdLPTJz2YiC4trvG/p+Sv7s/lz8Jn6obOrLmHr0owpuWnGak1JJWjoyTevpaJLk1fmVf8AS7pGjnblHDVqVOdKUJtN64a3oOL3c10jb5NJebVXRRfaqi8CEe0bbkUxgYyiY36Tv6eqN3wXkAFrygAAAAAAAAAACn8p30SH2mj3yLgVDlN+hr7RR/qZydFln2lPbHip0+fr8SycpCbyXSt9ah/25Fblz9fiWjlAV8l0/wDRfZBsz2eL2eVIziiOuXkWBqKO3WlK9um1r6PXtJehlKD0m5uEXFwdotylpRkk01ss3fbzELIzoNrVd9Wwtlh2Iyyb+XcSpyg1ezhfqb1X7ESea6/hsS99SguxVX4EDjn5yW6EV7r+JYc2Y2wtXpxNJfho15eKOTossx9+j+aPFxy2vm3xRGYdfNr2n4fElsqRvTn1e5oi8Ovm/vP8pRGj2pj7/wAHbAzYQRzOpMJGbGQBX8t+knxXZY4ZJo0pz0Z2toSteTjHS1aOm4+dbb6OvZzXJ2WHT26+KOt4GG6P4S2m5lDy8RyfVduVVxVEZ9XVEdPU7MXhMHKTlCDad3aM1FR8+CgrRVneM5y4wXB1ivFRlKKbaUpJN86TaTa6UkWCWTIfVj2HB5Jp7l1aRLnYZ55Lu8Ko75bmQbeRTtvv02cv0PQ+TK3z/s0f7pRsDRjCDjHUrd/EvPJjsrezR/ukLc51tWNpmnCRTPDZj5L4AC94QAAAAAA1pYpcyOuWJkBug0PlE95lYmXQBvFQ5TfocftFH+plkWKe4qnKTXvhIK1v4ij7pNnJ0WWfaU9seKqvn6/EtGfsrZLpdPkV20pFX39feyaz6xcZ5Ow0KbU53pOUY+c1o0Zp6SWta7LWZ7M6vb5Spmrm8o4vL7HZUnayi7L93O5ZPrv+U1xsu9mwsl1mrXpx1c8rvqUUyyao6WaLFyrSmUfWqR0m2rrXqvbXotRfU7O3PaxaMgxtg9u3E3/DR/8AddpFU8gfWqO/RDxbJrB0PJwVNX0VOU7u19KcYJ7NVrU4+8hVXGWTRZwtyK6ZnSJz7nVjo3py4SIfDLzOt+BPYhXjbj77kJh15nW/ArpejMb3NI5JBROR10QMpGbAycTIMIDIYAcbFDYy7cmWyt7NL+6Uii9RduTBu1Zf5KL99b4E7f4mHlH93nthfAAaHzwAAAAAjpwmtsX39x1eUJY4zhF7Un1ARflB5Q3p4SD5rcGdUsBul2oDW8oVXlFmvk1O/wD1FLvkW54KfQ+v4kBnfkSvXw8oQi3UjKNSCurSlCSejfmuroSnbqimuJnphUTi6cd3ebuHyNjZr6POL51NJWfPrcrPtN2lmpjpepGPtVEvdFSMexV0Pp5xdinWuO/PwzQsaaWxLsDsi1YfMiq7adeKXOoxlJ9U20v9pKYXM7CQ26c3/mlorspqJKLNTPVynh6dM57I9clBv2HKNKpJXjCct2jCUk3ximeo4bJGGh6NGmnv0E3+J6zdcU9qJcx0yzVcrz7tHfPlGXi8axFPE2ssFi30qi+5tP3EfQyfida+S4iN5NpSozTtq3JnukYRWxLsOROLVMKf2pez0ju+rwyeBrx9KjVjxhUXv0bHVOEl6UZLird57xcDmoTjlavjRHfl6vA1UX7/AEOV+g92qUIS9KMXxSfea08kYR7cPRfGnDvsc5rrTjlanjR/l9HiSa3mbnsdTNvBS24en1R0f6bGlVzJwEv5bj7M5eLOc3K2OVbPGJ+XrDykHpdTMDBvZOrHhKPjE1KvJ1T9XETXGCl+ZHObqWU8pYeeMx2xPlmocJF85M15tV9FNe+p8feaM+TqtdWrwa5204u3QknftRcc38hwwsHGMnKUmnJtWvZWSS5lt37WSoomJzlmx2Ls3LOzROczMdPnklgAXPGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//Z"></img>
            <i className="fa-solid fa-circle-chevron-right"></i>
            <p>{data.name}</p>
          </button>
          <button
            className={clsx("col-3", styles.categ)}
            onClick={openLstCateg}
          >
            <p>Select</p>
            <i className={clsx("fa-solid fa-circle-question", styles.ques)}></i>
            <i
              className={clsx("fa-solid fa-circle-chevron-right", styles.right)}
            ></i>
            <p>{nameCate}</p>
          </button>
          <div className={clsx("col-3", styles.amount)}>
            <p>Amount</p>
            <input
              type="number"
              name="amount"
              placeholder="0"
              value={data.amount}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div className={clsx("row", styles.row2)}>
          <div className={clsx("col-3", styles.date)}>
            <p>Choose Date</p>
            {/* <i className="fa-solid fa-circle-chevron-right"></i> */}
            <input
              name="date"
              type="date"
              max="9999-12-31"
              min="1000-01-01"
              value={data.date}
              onChange={handleChange}
            ></input>
          </div>
          <div className={clsx("col-6", styles.note)}>
            <p>Note</p>
            <input
              type="text"
              name="note"
              placeholder="Write your note here"
              value={data.note}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div className={styles.btnAdd}>
          <button onClick={props.openAdd}>CANCEL</button>
          <button onClick={addTrans}>SAVE</button>
        </div>
      </div>
      {/* MOBILE */}
      <div className={clsx(styles.modalContainer, "d-sm-block d-md-none")}>
        <div className={clsx("col-12", styles.header)}>
          <p>Add transaction</p>
        </div>
        <div className={clsx("row", styles.row)}>
          <button
            className={clsx("col-10", styles.wallet)}
            onClick={openLstWallet}
          >
            <p>Name</p>
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBEWFRgVFRUYGRgaGBoYGhwaGBkcHRgVGBgZGhgcGBgcIy4lHB4rHxgYJjgmMC8xNTU2GiQ7QDszPy40NTEBDAwMEA8QHhISHzQsJCs0NDQ0NDQ0PTE0NDQ0NDQ0NDQ0NDQ0NTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgIDAAAAAAAAAAAAAAAABQYBBAIDB//EAEcQAAIBAgEHBwcKBAQHAAAAAAABAgMRBAUGEiExUXEHQWGBkbHBEyIyQnKh0RQjNFJ0gpLC4fAkQ7LDFWKDohZEVLPS4vL/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEAQUG/8QAOREBAAECAwMJBQUJAAAAAAAAAAECAwQRMRIhQQUTUWFxkbHB0TNCgaHhFCIyQ9IVNFNygpKisvD/2gAMAwEAAhEDEQA/APXgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXAA4ucd67UcfLR+tHtQHYAAAAAAAAAAAAAAAAAAABEZ0Zchg8PKtKLm7qMYp20pS2K/MtT7AJcFBqZ6Ymy8ynF9bs913LX2HVRzrxc5wi5wipVIQbio3ipSSutK+8r5ynRtnk+9TEzVlGW/X0zehgiYYqlH0sTpe1OmvdFRNfEZbwyeurF8JXJzOTHFMzpHim5VIrnOupiYpXepb3qRASzgw2i/nLPXzSfciNnlvBr0pTqPVdys9nQ7ENuOlfGGu1aUT3T6LJUypDUlJXbS1JvW1dd67SKnl6bfm6bXspW43sa0c7sKoWUZR5rKMbblaz2FVxuX6dSpfSloXtzXUdT1Ls7BFcTOqX2S/HuT3Lm8qVXLRtPdduy9JK6ttWs6YZTqyaWhUSe1yb83UrX367rqK3DOZuVouMYrUtJ3bS2Xd9tl7yRhlqi7XnF3WtqS6OY7mjNm5GtM90rBRqSe2V+tnYmyIw+U6V2lOL3ecvibCyhDmkhCu5GWqRla13w/fYYstqNaGOjsdmjlLEp7NSLcpUZ0rDTd4rgu45nmOU89MbRrzpRdJwjK0dKk29GyavJVFfbuMU+UbFL0qVGXBVI+Mu4r24bYwV+YiqKdd+scfi9PB55Q5SJXtPDRtzuNZ90oLvLnkfKlPE01Up3te0oy1ShNWupJc+tPc000diqJ0VXLFy1+OnJIAA6qAAAAAAAAAAAKZyoQvhqWu38TT96mvEuZTOVP6JTe7E0X16zk6Stse1p7Y8VNULc72vYlztvd0i3S+0yrv8A+fizPk30/wC39TE+slxS/d2NFGfJ/vS+CHk1uXbJ+I3OTMsaty7EHNbxoLo7Pjczopc/uS8AOqvLU7MgcNPzZSts124K5L5Tm4wk9ezf1eJF5Kp6SjG9k5qGxO2nKMW9fElGiFVURMZ8M5enU80MBopOndpWvpzTb3uzsYlmXgXsU1wn8bm5HJSSsq2IXT5Vtvp1pr3HL/CZ+risQuMqcu+Bq2ep85GIufxZ+flmi55i4V7KlZfeg1/Sdc8xKXq16i4pPusTH+GYheji5fep05d1h8ixy2Ymm/ao/CZzZp6FkYq/Gl7/AG/SgP8AgaovRxcvwtd0jDzRxq9HFJ8XNd1yweSykvXw0uMaq7mzKllJephnwnU7nEbNPRLs4u/OtdM9sR5xHzVDEZkYyTcnKjKT2tuV3ZWV3omrUzKxi2Uov2alu9ovPyvHr/loP2K0fzWOSyliV6WDn92pSl3SObFPWnGLvxHud9PlVDzHKGQ8RRV6tKUE3ZPSjJN2va9mr8S/cmmqlVV3tg9dvqtc3Ql2GjnjlPToqnKlUpyclOOmoqLUU72km9es3uTN/N1Vts6fdIjGUV5QuxFyq7hNquIic+GnjK7AAueOAAAAAAAAAAAUzlR+i0vtNL8xcym8qH0Sn9ppd8jk6Stse1p7Y8VRfP1m5jMlVqdKNadlCTSXO3pJyWpXtqRpvn6/EtOfeJ8nk2jK1/Ooq3GlIy26Iq1e9j8TXYinYy3zKnTrx3zts9GJ30aOkrq/bbuIHA42FSMnUejHTsrLnsnbStx5y0YSUGrRlfRsnvTstpdsURweXVjsRMfi7oj0RuJnovRtr6Xc6qLlJ1PRtBU3qW3T0ou929yZqZy1ZqUXF7FJvheEVfrfvO3N2tOdPESm3Jr5PBPVqinUsvcJppy3QssX783KZqr3Zx85iGcuStTduey7bMj8j05zdOMZJOVXRjdbJOSs+p6+o3suv5r7yIzA1ZwUJxeuM9KL3STumU06PXrz2py1yenLI+LWzGy+9TT8TnDAZSWzFU5e1Tt3JlQo51YxetF9S/Q3KOeuJW2EX2r8xdt0vLnC4qOFE/00+dMSs3k8rLZLDPi5p9mj4mHXysv5NGXsz/8AJog6efU+ej2NnfDP3fRfU/0O7VPSr+y4iPy6Z/t8phJrKmVI+lg0/ZnDwmzl/j2MXpYGr928u5MjKvKNhoO06dS/Rrtx1nZS5ScA9vlI8ab8CUb+P/dymvdOVVqnPtq/Wk1nNU9bCYhcKcn4HNZ10fWpVo8ab+Jp0+UHJr/mtcYSXgbdLPTJz2YiC4trvG/p+Sv7s/lz8Jn6obOrLmHr0owpuWnGak1JJWjoyTevpaJLk1fmVf8AS7pGjnblHDVqVOdKUJtN64a3oOL3c10jb5NJebVXRRfaqi8CEe0bbkUxgYyiY36Tv6eqN3wXkAFrygAAAAAAAAAACn8p30SH2mj3yLgVDlN+hr7RR/qZydFln2lPbHip0+fr8SycpCbyXSt9ah/25Fblz9fiWjlAV8l0/wDRfZBsz2eL2eVIziiOuXkWBqKO3WlK9um1r6PXtJehlKD0m5uEXFwdotylpRkk01ss3fbzELIzoNrVd9Wwtlh2Iyyb+XcSpyg1ezhfqb1X7ESea6/hsS99SguxVX4EDjn5yW6EV7r+JYc2Y2wtXpxNJfho15eKOTossx9+j+aPFxy2vm3xRGYdfNr2n4fElsqRvTn1e5oi8Ovm/vP8pRGj2pj7/wAHbAzYQRzOpMJGbGQBX8t+knxXZY4ZJo0pz0Z2toSteTjHS1aOm4+dbb6OvZzXJ2WHT26+KOt4GG6P4S2m5lDy8RyfVduVVxVEZ9XVEdPU7MXhMHKTlCDad3aM1FR8+CgrRVneM5y4wXB1ivFRlKKbaUpJN86TaTa6UkWCWTIfVj2HB5Jp7l1aRLnYZ55Lu8Ko75bmQbeRTtvv02cv0PQ+TK3z/s0f7pRsDRjCDjHUrd/EvPJjsrezR/ukLc51tWNpmnCRTPDZj5L4AC94QAAAAAA1pYpcyOuWJkBug0PlE95lYmXQBvFQ5TfocftFH+plkWKe4qnKTXvhIK1v4ij7pNnJ0WWfaU9seKqvn6/EtGfsrZLpdPkV20pFX39feyaz6xcZ5Ow0KbU53pOUY+c1o0Zp6SWta7LWZ7M6vb5Spmrm8o4vL7HZUnayi7L93O5ZPrv+U1xsu9mwsl1mrXpx1c8rvqUUyyao6WaLFyrSmUfWqR0m2rrXqvbXotRfU7O3PaxaMgxtg9u3E3/DR/8AddpFU8gfWqO/RDxbJrB0PJwVNX0VOU7u19KcYJ7NVrU4+8hVXGWTRZwtyK6ZnSJz7nVjo3py4SIfDLzOt+BPYhXjbj77kJh15nW/ArpejMb3NI5JBROR10QMpGbAycTIMIDIYAcbFDYy7cmWyt7NL+6Uii9RduTBu1Zf5KL99b4E7f4mHlH93nthfAAaHzwAAAAAjpwmtsX39x1eUJY4zhF7Un1ARflB5Q3p4SD5rcGdUsBul2oDW8oVXlFmvk1O/wD1FLvkW54KfQ+v4kBnfkSvXw8oQi3UjKNSCurSlCSejfmuroSnbqimuJnphUTi6cd3ebuHyNjZr6POL51NJWfPrcrPtN2lmpjpepGPtVEvdFSMexV0Pp5xdinWuO/PwzQsaaWxLsDsi1YfMiq7adeKXOoxlJ9U20v9pKYXM7CQ26c3/mlorspqJKLNTPVynh6dM57I9clBv2HKNKpJXjCct2jCUk3ximeo4bJGGh6NGmnv0E3+J6zdcU9qJcx0yzVcrz7tHfPlGXi8axFPE2ssFi30qi+5tP3EfQyfida+S4iN5NpSozTtq3JnukYRWxLsOROLVMKf2pez0ju+rwyeBrx9KjVjxhUXv0bHVOEl6UZLird57xcDmoTjlavjRHfl6vA1UX7/AEOV+g92qUIS9KMXxSfea08kYR7cPRfGnDvsc5rrTjlanjR/l9HiSa3mbnsdTNvBS24en1R0f6bGlVzJwEv5bj7M5eLOc3K2OVbPGJ+XrDykHpdTMDBvZOrHhKPjE1KvJ1T9XETXGCl+ZHObqWU8pYeeMx2xPlmocJF85M15tV9FNe+p8feaM+TqtdWrwa5204u3QknftRcc38hwwsHGMnKUmnJtWvZWSS5lt37WSoomJzlmx2Ls3LOzROczMdPnklgAXPGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//Z"></img>
            <i className="fa-solid fa-circle-chevron-right"></i>
            <p>Wallet1</p>
          </button>
        </div>
        <div className={clsx("row", styles.row)}>
          <button
            className={clsx("col-10", styles.categ)}
            onClick={openLstCateg}
          >
            <p>Select</p>
            <i className={clsx("fa-solid fa-circle-question", styles.ques)}></i>
            <i
              className={clsx("fa-solid fa-circle-chevron-right", styles.right)}
            ></i>
            <p>Category</p>
          </button>
        </div>
        <div className={clsx("row", styles.row)}>
          <div className={clsx("col-10", styles.amount)}>
            <p>Amount</p>
            <input
              type="number"
              name="amount"
              placeholder="0"
              value={data.amount}
              onChange={handleChange}
            ></input>
          </div>
        </div>

        <div className={clsx("row", styles.row)}>
          <div className={clsx("col-10", styles.date)}>
            <p>Choose Date</p>

            <input
              name="date"
              type="date"
              max="9999-12-31"
              min="1000-01-01"
              value={data.date}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div className={clsx("row", styles.row)}>
          <div className={clsx("col-10", styles.note)}>
            <p>Note</p>
            <input
              type="text"
              name="note"
              placeholder="Write your note here"
              value={data.note}
              onChange={handleChange}
            ></input>
          </div>
        </div>

        <div className={styles.btnAdd}>
          <button onClick={props.openAdd}>CANCEL</button>
          <button onClick={addTrans}>SAVE</button>
        </div>
      </div>

      {openWallet ? (
        <LstWallet
          open={openLstWallet}
          chooseWallet={chooseWallet}
          curWallet={1}
        />
      ) : null}
      {openCateg ? (
        <LstCateg open={openLstCateg} chooseCateg={chooseCateg} />
      ) : null}
    </div>
  );
}

export default AddTransForm;
