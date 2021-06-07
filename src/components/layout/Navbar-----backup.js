import React,{ useEffect,useState } from 'react';
import Axios from "../../helper/axios";
import { getMenuList } from '../../services/home';

const Navbar = () => {
  const [menuList, setMenuList] = useState([])
  useEffect(() => {
    let mounted = true;
    getMenuList().then(items => {
        if(mounted) {
          const itemList = [];
          const data = items.data;
          for (let index in data) {
            let item = data[index];
              itemList.push(item);
          }
          setMenuList(itemList)
        }
    })
    return () => mounted = false;
  }, []);
  console.log(menuList);
  return (
    <>
      <nav>
        <button className="menu">
          <span className="icon-bar">
          </span>

          <span className="icon-bar">
          </span>

          <span className="icon-bar">
          </span>
        </button>
        <ul>
            {menuList.map((menu, index) => (
          <li>
                    <div className="nav-link ">{menu.title}</div>
                    <div className="subLink ">
                      <ul>
                          <li className="col-sm-12 col-md-3">
                            <ul className="subLink-2">
                                <li>
                                    <h5><a href="study-abroad/index.html" title="Study Abroad">Study Abroad</a></h5>
                                </li>
                            </ul>
                          </li>
                          
                          <li className="col-sm-12 col-md-3">
                            <ul className="subLink-2">
                                <li>
                                    <h5>Offerings</h5>
                                </li>
                                  { menu.courses.map(courses => (
                                  <li><a href={courses.slug} title={courses.title}>{courses.title}</a></li>
                                ))}
                            </ul>
                          </li>

                          <li className="col-sm-12 col-md-3">
                            <ul className="subLink-2">
                                <li>
                                    <h5>States</h5>
                                </li>
                                  { menu.states.map(states => (
                                  <li><a href={states.slug} title={states.title}>{states.title}</a></li>
                                ))}
                            </ul>
                          </li>

                          <li className="col-sm-12 col-md-3">
                            <ul className="subLink-2">
                                 <li>
                                    <h5>Exam</h5>
                                 </li>
                                  { menu.exam.map(exam => (
                                  <li><a href={exam.slug} title={exam.title}>{exam.title}</a></li>
                                ))}
                            </ul>
                          </li>
                      </ul>
                    </div>
                </li>
        ))}
        </ul>
      </nav>
    </>
  );
}
export default Navbar;