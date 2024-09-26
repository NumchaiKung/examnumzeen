// List of questions, answers, and explanations in Thai
const questions = [
    {
        question: "HIV ย่อมาจากอะไร?",
        choices: [
            "A) Human Immune Virus",
            "B) Human Immunodeficiency Virus",
            "C) Human Infectious Virus",
            "D) Human Immunity Virus"
        ],
        correct: 1,
        explanation: [
            "คำนี้ไม่มีความหมายทางการแพทย์",  // Explanation for wrong choice A
            "ถูกต้อง: HIV ย่อมาจาก Human Immunodeficiency Virus ซึ่งเป็นไวรัสที่ทำให้ระบบภูมิคุ้มกันของร่างกายเสื่อมสภาพลง ส่งผลให้ร่างกายอ่อนแอต่อการติดเชื้อโรคต่างๆ",  // Correct choice B
            "ชื่อไวรัสนี้ไม่ถูกต้อง",  // Explanation for wrong choice C
            "เป็นการใช้คำไม่ถูกต้อง"  // Explanation for wrong choice D
        ]
    },
    {
        question: "โรค HIV สามารถแพร่เชื้อได้ผ่านทางไหน?",
        choices: [
            "A) สัมผัสทางผิวหนัง",
            "B) รับประทานอาหารร่วมกัน",
            "C) การมีเพศสัมพันธ์โดยไม่ป้องกัน",
            "D) การจับมือ"
        ],
        correct: 2,
        explanation: [
            "HIV ไม่สามารถแพร่เชื้อผ่านการสัมผัสทั่วไป",  // Explanation for wrong choice A
            "การใช้จานหรือช้อนร่วมกันไม่ทำให้ติดเชื้อ HIV",  // Explanation for wrong choice B
            "ถูกต้อง: HIV สามารถแพร่เชื้อผ่านการมีเพศสัมพันธ์โดยไม่ป้องกัน การใช้เข็มฉีดยาร่วมกัน การถ่ายเลือดที่ปนเปื้อน และจากแม่สู่ลูกในระหว่างคลอดหรือนมแม่",  // Correct choice C
            "การสัมผัสทั่วไป เช่น การจับมือ ไม่ทำให้ติดเชื้อ"  // Explanation for wrong choice D
        ]
    },
    {
        question: "ระยะของโรค HIV ที่มีการทำลายระบบภูมิคุ้มกันมากที่สุดเรียกว่าอะไร?",
        choices: [
            "A) ระยะเฉียบพลัน",
            "B) ระยะฟักตัว",
            "C) ระยะเริ่มต้น",
            "D) ระยะเอดส์"
        ],
        correct: 3,
        explanation: [
            "เป็นระยะเริ่มต้นของการติดเชื้อ ไม่ใช่ระยะที่ระบบภูมิคุ้มกันถูกทำลายมากที่สุด",  // Explanation for wrong choice A
            "เป็นช่วงที่เชื้อ HIV อยู่ในร่างกาย แต่ยังไม่มีอาการชัดเจน",  // Explanation for wrong choice B
            "เป็นช่วงแรกหลังจากติดเชื้อใหม่ๆ ยังไม่ทำลายระบบภูมิคุ้มกันอย่างรุนแรง",  // Explanation for wrong choice C
            "ถูกต้อง: ระยะเอดส์คือระยะสุดท้ายของการติดเชื้อ HIV ที่ทำให้ระบบภูมิคุ้มกันถูกทำลายมากที่สุด"  // Correct choice D
        ]
    },
    {
        question: "การทดสอบหาเชื้อ HIV นิยมใช้วิธีใด?",
        choices: [
            "A) การตรวจเลือด",
            "B) การตรวจปัสสาวะ",
            "C) การตรวจชิ้นเนื้อ",
            "D) การตรวจน้ำลาย"
        ],
        correct: 0,
        explanation: [
            "ถูกต้อง: การตรวจเลือดเป็นวิธีที่นิยมใช้มากที่สุดในการตรวจหาเชื้อ HIV",  // Correct choice A
            "ไม่ใช้ในการตรวจหาเชื้อ HIV",  // Explanation for wrong choice B
            "เป็นวิธีที่ใช้ในโรคอื่นๆ ไม่ใช่ HIV",  // Explanation for wrong choice C
            "มีการวิจัยแต่ยังไม่แพร่หลายเท่ากับการตรวจเลือด"  // Explanation for wrong choice D
        ]
    },
    {
        question: "ยาที่ใช้ในการรักษาผู้ติดเชื้อ HIV เรียกว่าอะไร?",
        choices: [
            "A) ยาต้านมะเร็ง",
            "B) ยาปฏิชีวนะ",
            "C) ยาต้านไวรัส",
            "D) ยากล่อมประสาท"
        ],
        correct: 2,
        explanation: [
            "เป็นยาที่ใช้รักษามะเร็ง ไม่ใช่ HIV",  // Explanation for wrong choice A
            "ใช้รักษาการติดเชื้อแบคทีเรีย ไม่ใช่ไวรัส",  // Explanation for wrong choice B
            "ถูกต้อง: ยาต้านไวรัส (Antiretroviral Therapy หรือ ART) ใช้ในการควบคุมการแพร่กระจายของเชื้อ HIV",  // Correct choice C
            "เป็นยาที่ใช้รักษาความเครียดหรือซึมเศร้า ไม่เกี่ยวข้องกับ HIV"  // Explanation for wrong choice D
        ]
    },
    {
        question: "HIV ทำให้ระบบใดในร่างกายถูกทำลาย?",
        choices: [
            "A) ระบบประสาท",
            "B) ระบบทางเดินอาหาร",
            "C) ระบบภูมิคุ้มกัน",
            "D) ระบบการหายใจ"
        ],
        correct: 2,
        explanation: [
            "HIV ทำลายระบบภูมิคุ้มกัน ไม่ใช่ระบบประสาทโดยตรง",  // Explanation for wrong choice A
            "ไม่ใช่เป้าหมายหลักของ HIV",  // Explanation for wrong choice B
            "ถูกต้อง: HIV ทำลายเซลล์ CD4 ซึ่งเป็นเซลล์ที่สำคัญในการทำงานของระบบภูมิคุ้มกัน",  // Correct choice C
            "ระบบนี้ไม่ได้รับผลโดยตรงจาก HIV"  // Explanation for wrong choice D
        ]
    },
    {
        question: "ผู้ป่วย HIV สามารถมีคุณภาพชีวิตที่ดีได้ด้วยวิธีใด?",
        choices: [
            "A) การรักษาด้วยยาต้านไวรัสอย่างต่อเนื่อง",
            "B) หลีกเลี่ยงการใช้ยาต้านไวรัส",
            "C) การออกกำลังกายอย่างหนัก",
            "D) การกินยาสมุนไพรเท่านั้น"
        ],
        correct: 0,
        explanation: [
            "ถูกต้อง: ยาต้านไวรัสช่วยให้ผู้ป่วย HIV มีคุณภาพชีวิตที่ดีขึ้น",  // Correct choice A
            "การหยุดใช้ยาจะทำให้เชื้อเพิ่มจำนวนและอาจเกิดภาวะแทรกซ้อน",  // Explanation for wrong choice B
            "การออกกำลังกายช่วยสุขภาพทั่วไป แต่ไม่สามารถควบคุมเชื้อ HIV",  // Explanation for wrong choice C
            "สมุนไพรไม่สามารถรักษา HIV ได้"  // Explanation for wrong choice D
        ]
    },
    {
        question: "อาการที่มักพบในผู้ติดเชื้อ HIV ระยะแรกคืออะไร?",
        choices: [
            "A) ไข้และต่อมน้ำเหลืองโต",
            "B) ผื่นแดง",
            "C) หายใจถี่",
            "D) ท้องเสียเรื้อรัง"
        ],
        correct: 0,
        explanation: [
            "ถูกต้อง: ในระยะแรกผู้ติดเชื้อ HIV มักมีไข้และต่อมน้ำเหลืองโต",  // Correct choice A
            "ไม่ใช่อาการหลักในระยะแรก",  // Explanation for wrong choice B
            "ไม่ใช่อาการทั่วไปในช่วงแรก",  // Explanation for wrong choice C
            "มักเกิดในระยะที่ภูมิคุ้มกันอ่อนแอมากแล้ว"  // Explanation for wrong choice D
        ]
    },
    {
        question: "วิธีการใดที่สามารถลดความเสี่ยงในการติดเชื้อ HIV ได้ดีที่สุด?",
        choices: [
            "A) การฉีดวัคซีน",
            "B) การใช้ถุงยางอนามัยเมื่อมีเพศสัมพันธ์",
            "C) การหลีกเลี่ยงอาหารบางประเภท",
            "D) การดื่มน้ำมากๆ"
        ],
        correct: 1,
        explanation: [
            "ยังไม่มีวัคซีนที่สามารถป้องกัน HIV ได้",  // Explanation for wrong choice A
            "ถูกต้อง: การใช้ถุงยางอนามัยอย่างถูกต้องช่วยลดความเสี่ยงในการติดเชื้อ HIV",  // Correct choice B
            "การหลีกเลี่ยงอาหารบางประเภทไม่เกี่ยวข้องกับการป้องกัน HIV",  // Explanation for wrong choice C
            "การดื่มน้ำมากๆ ไม่เกี่ยวข้องกับการป้องกันเชื้อ HIV"  // Explanation for wrong choice D
        ]
    },
    {
        question: "ข้อใดไม่ใช่วิธีการแพร่เชื้อ HIV?",
        choices: [
            "A) การใช้เข็มฉีดยาร่วมกัน",
            "B) การสัมผัสเหงื่อ",
            "C) การถ่ายเลือด",
            "D) จากแม่สู่ลูก"
        ],
        correct: 1,
        explanation: [
            "การใช้เข็มฉีดยาร่วมกันเป็นวิธีการแพร่เชื้อ HIV ที่สำคัญ",  // Explanation for wrong choice A
            "ถูกต้อง: การสัมผัสเหงื่อไม่ได้ทำให้ติดเชื้อ HIV",  // Correct choice B
            "การถ่ายเลือดที่ปนเปื้อนเชื้อ HIV สามารถแพร่เชื้อได้",  // Explanation for wrong choice C
            "การติดเชื้อ HIV จากแม่สู่ลูกสามารถเกิดขึ้นได้ในระหว่างคลอดหรือให้นม"  // Explanation for wrong choice D
        ]
    }
];

    // Add remaining questions (same format as above)


let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 30;

function startQuiz() {
    shuffleQuestions();
    loadQuestion();
    startTimer();
}

function shuffleQuestions() {
    questions.sort(() => Math.random() - 0.5); // Randomize questions
}

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const choices = document.querySelectorAll(".choice");
    const currentQuestion = questions[currentQuestionIndex];

    document.getElementById("current-question").textContent = currentQuestionIndex + 1;
    questionElement.textContent = currentQuestion.question;
    choices.forEach((choice, index) => {
        choice.textContent = currentQuestion.choices[index];
    });

    document.getElementById("explanation").textContent = ""; // Clear explanation
}

function startTimer() {
    timeLeft = 30; // Set time to 30 seconds
    document.getElementById("time").textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            showExplanation("หมดเวลา!", -1); // No choice made (index -1)
        }
    }, 1000);
}

function selectAnswer(index) {
    clearInterval(timer); // Stop the timer
    const currentQuestion = questions[currentQuestionIndex];
    let explanationMessage = "";

    if (index === currentQuestion.correct) {
        score++;
        document.getElementById("current-score").textContent = score;
        explanationMessage = "ถูกต้อง! " + currentQuestion.explanation[index];
    } else {
        explanationMessage = "ผิด! " + currentQuestion.explanation[index] + " คำตอบที่ถูกต้องคือ: " + currentQuestion.choices[currentQuestion.correct] + ". " + currentQuestion.explanation[currentQuestion.correct];
    }

    showExplanation(explanationMessage);
}

function showExplanation(message) {
    document.getElementById("explanation").textContent = message;
    setTimeout(nextQuestion, 3000); // Wait for 3 seconds before moving to the next question
}


function endQuiz() {
    document.getElementById("quiz-container").innerHTML = `
        <h2>จบการทดสอบ!</h2>
        <p>คะแนนของคุณคือ ${score}/${questions.length}.</p>
    `;
}
function nextQuestion() {
    if (currentQuestionIndex + 1 < questions.length) {
        currentQuestionIndex++;  // Increment after checking the condition
        loadQuestion();
        startTimer();
    } else {
        endQuiz();  // End the quiz once all questions are answered
    }
}


// Start the quiz
startQuiz();
