import styles from './Description.module.css'

function Description() {
    return(
        <div className={styles.container}>
            <h2 className={styles.h2}>Where is the Great Wall of China?</h2>
            <p className={styles.p}>
                The Great Wall of China is located in northern China, stretching 
                from the east at Shanhaiguan in Hebei province to the west at 
                Jiayuguan in Gansu province. It passes through 15 different provinces 
                and autonomous regions and includes numerous sections, with the most 
                popular and well-preserved ones being near Beijing.
            </p>
            <img className={styles.img} src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy8aBJqhW2eRYYymAHxtfJWe6Tuq5nsD1WVKgCIoqxhrrlOb62PDuQMnPatOTaMV8rW0xvf2-uW8UgeLWDGjq0LhF-DQjanlYL7TJ05YK-Epsmes6BWknHGD--CMD5xjZohQOmM=w270-h312-n-k-no"/>
        </div>
    );
}

export default Description;