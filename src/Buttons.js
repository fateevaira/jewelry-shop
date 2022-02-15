function Buttons ({battonChoiсe}) {
    return(<div className="cont">
        <button className="btnChoise" onClick={() => battonChoiсe("earrings")}>earrings</button>
        <button className="btnChoise" onClick={() => battonChoiсe("necklace")}>necklaces</button>
        <button className="btnChoise" onClick={() => battonChoiсe("set")}>jewelry sets</button>
        <button className="btnChoise" onClick={() => battonChoiсe("ring")}>rings</button>
        <button className="btnChoise" onClick={() => battonChoiсe("bracelet")}>bracelets</button>
    </div>)
}
export default Buttons;