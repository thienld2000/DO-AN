
import { TabItem } from "./TabItem";

export const Tabs = ({ list, activeTab, onTabSwitch}) => {
    let active = activeTab === '' ? list[0] : activeTab;
    console.log(active);
    return (
        <div className="app__menuitem-head ">
            <div className="container mx-auto flex align-center py-2 border-b-gray-400 border-b-1">
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
    )
}