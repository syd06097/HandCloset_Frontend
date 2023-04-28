import React, { useState } from "react";
import styles from "./ClothingForm.module.css"

const ClothingForm = () => {
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState("");
    const [subcategory, setSubcategory] = useState("");
    const [seasons, setSeasons] = useState([]);
    const [description, setDescription] = useState("");

    const handleImageChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        } else {
            setImage("");
        }
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        setSubcategory("");
    };

    const handleSubcategoryChange = (e) => {
        setSubcategory(e.target.value);
    };

    const handleSeasonChange = (e) => {
        const selectedSeason = e.target.value;
        setSeasons((prevSeasons) => {
            if (prevSeasons.includes(selectedSeason)) {
                return prevSeasons.filter((season) => season !== selectedSeason);
            } else {
                return [...prevSeasons, selectedSeason];
            }
        });
    };

    const handleImageCancel = () => {
        setImage(null);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // 여기서 백엔드로 데이터를 보내는 로직을 구현해야 합니다.
        console.log({ image, category, subcategory, seasons, description });
    };

    const categories = [
        { name: "상의", subcategories: ["티셔츠", "셔츠"] },
        { name: "하의", subcategories: ["바지", "청바지"] },
    ];

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label className={styles.label}>이미지</label>
                <div className={styles.thumbnailContainer}>
                    {image ? (
                        <div>
                        <img src={image} alt="clothing" className={styles.thumbnail} />
                        <button onClick={handleImageCancel}>취소</button>
                        </div>
                    ) : (
                        <div className={styles.thumbnail} />
                    )}
                </div>
                <label for={styles.file}>
                        <div className={styles.btn_upload}>파일업로드</div>             
                <input type="file" name="file" id={styles.file} onChange={handleImageChange} />
                </label>
            </div>
            <div>
                <label>
                    카테고리
                    <br/>
                    <select value={category} onChange={handleCategoryChange} className={styles.select}>
                        <option value="">-- 선택 --</option>
                        {categories.map((category) => (
                            <option key={category.name} value={category.name}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            {category && (
                <div style={{marginTop:"1px"}}>
                    <filedset className={styles.subcat}>
                        {categories
                            .find((c) => c.name === category)
                            .subcategories.map((subcat) => (
                                <label key={subcat} className={styles.subcat_label}>
                                    <input
                                        type="radio"
                                        name="subcategory"
                                        value={subcat}
                                        checked={subcategory === subcat}
                                        onChange={handleSubcategoryChange} 
                                        id={styles.subcategory}/>
                                    <span>{subcat}</span>
                                </label>
                            ))}
                    </filedset>
                </div>
            )}
            <br/>
            <h3>계절</h3>
            <div className={styles.ckbox_group}>
                    <label className={styles.btn_ckbox}> 
                        <input
                            type="checkbox"
                            value="봄"
                            checked={seasons.includes("봄")}
                            onChange={handleSeasonChange}
                        />
                        <span>봄</span>
                    </label>
                    <br />
                    <label className={styles.btn_ckbox}>
                        <input
                            type="checkbox"
                            value="여름"
                            checked={seasons.includes("여름")}
                            onChange={handleSeasonChange}
                        />
                        <span>여름</span>
                    </label>
                    <br />
                    <label className={styles.btn_ckbox}>
                        <input
                            type="checkbox"
                            value="가을"
                            checked={seasons.includes("가을")}
                            onChange={handleSeasonChange}
                        />
                        <span>가을</span>
                    </label>
                    <br />
                    <label className={styles.btn_ckbox}>
                        <input
                            type="checkbox"
                            value="겨울"
                            checked={seasons.includes("겨울")}
                            onChange={handleSeasonChange}
                        />
                        <span>겨울</span>
                    </label>
            </div>
            <div>
                <label>
                    설명
                    <br />
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <button type="submit">제출</button>
            </div>
        </form>
    );
};

export default ClothingForm;