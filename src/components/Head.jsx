import { Link } from "react-router-dom"
const Head = () => {
    return(
        <div>

            <header className="header">
                <figure>
                    <div className="div">
                        <img width="50px" src="data:image/png;base64,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" />
                        <figcaption><h2>Shopify</h2></figcaption>
                    </div>
                </figure>
                <div className="input"><input className="henry" type="text"placeholder="Search Items" /><img src="data:image/png;base64,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" width="20px"/></div>
                <div className="cart">
                    <Link><img  width="70px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4-xHhSMcNxCR7Gr385z2OXYiR324S-Gx8wsu3aiKibenNrAVdUUi7nFQzzw&s" /></Link>
                </div>
            </header>

            <div className="mockups">


            <div className="abcd">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img  src="https://ng.jumia.is/cms/0-CMS-MIGRATION-2020/oraimo/2023/March/1168x384_3.jpg" />
                            </div>
                            <div class="carousel-item">
                            <img  src="https://ng.jumia.is/cms/0-CMS-MIGRATION-2020/oraimo/2023/Oraimo_slider.jpg" />
                            </div>
                            {/* class="d-block w-75" */}
                            <div class="carousel-item">
                            <img  src="https://ng.jumia.is/cms/0-1-initiatives/official-stores/2023/Updated-creative/Desktop_MLP_Slider__1168x384.jpg"  alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </button>
                    </div>
                </div>

            </div>

            
        </div>



            



    )
}
export default Head