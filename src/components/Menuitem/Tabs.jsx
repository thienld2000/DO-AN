import { TabItem } from "./TabItem";
export const Tabs = ({ list, activeTab, onTabSwitch}) => {
    let active = activeTab === '' ? list[0] : activeTab;
    console.log(active);
    return (
        <>
            <div className="tab container bg-body rounded-pill ">
            <div className="mx-auto d-flex align-items-center">
                {list.map((item, index) => {
                    return (
                        <TabItem 
                            title={item}
                            key={index}
                            index={index}
                            active={active === item}
                            setActive={onTabSwitch}
                            />
                    )
                })}
            </div>
        </div>
        </>
       
    )
}