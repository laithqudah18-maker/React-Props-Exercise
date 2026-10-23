import TagButton from "./TagButton"
export default function SideMenu({title}){
    return(
        <div style={{margin:"25px",border:"solid teal 5px"}} >
        <TagButton title="مميز">
            <div>
              <span>💯</span>  
            </div>
            </TagButton>

        <TagButton title="الاكثر قراءه">
            <div>
                <span>😍😍</span>
            </div>
            </TagButton>
        <TagButton title="مقالات الاسبوع"/>
        {/*<TagButton />
        <TagButton />
        <TagButton />
        <TagButton />
        <TagButton />*/}
    </div>
    );
}